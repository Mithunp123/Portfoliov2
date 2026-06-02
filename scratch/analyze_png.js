import fs from 'fs';
import zlib from 'zlib';

function analyzePng(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  
  // Verify PNG signature
  if (fileBuffer.readUInt32BE(0) !== 0x89504E47 || fileBuffer.readUInt32BE(4) !== 0x0D0A1A0A) {
    throw new Error('Not a valid PNG file');
  }
  
  let offset = 8;
  let width = 0;
  let height = 0;
  let bitDepth = 0;
  let colorType = 0;
  const idatChunks = [];
  
  while (offset < fileBuffer.length) {
    const length = fileBuffer.readUInt32BE(offset);
    const type = fileBuffer.toString('ascii', offset + 4, offset + 8);
    const data = fileBuffer.subarray(offset + 8, offset + 8 + length);
    
    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      console.log(`IHDR: width=${width}, height=${height}, bitDepth=${bitDepth}, colorType=${colorType}`);
    } else if (type === 'IDAT') {
      idatChunks.push(data);
    } else if (type === 'IEND') {
      break;
    }
    
    offset += 12 + length;
  }
  
  const idatBuffer = Buffer.concat(idatChunks);
  const inflated = zlib.inflateSync(idatBuffer);
  
  // Calculate bytes per pixel based on color type
  // Color type 2: RGB (3 bytes), Color type 6: RGBA (4 bytes)
  let bytesPerPixel = 3;
  if (colorType === 6) bytesPerPixel = 4;
  else if (colorType === 0) bytesPerPixel = 1; // Grayscale
  else if (colorType === 4) bytesPerPixel = 2; // Grayscale + Alpha
  
  console.log(`Inflated IDAT size: ${inflated.length} bytes. Expected: ${height * (1 + width * bytesPerPixel)} bytes.`);
  
  // Read pixels and build a low-res grid of brightness
  const gridW = 40;
  const gridH = 40;
  const grid = Array.from({ length: gridH }, () => Array(gridW).fill(' '));
  
  const scanlineLength = 1 + width * bytesPerPixel;
  
  for (let gh = 0; gh < gridH; gh++) {
    const y = Math.floor((gh / gridH) * height);
    const rowOffset = y * scanlineLength;
    const filterType = inflated[rowOffset];
    
    for (let gw = 0; gw < gridW; gw++) {
      const x = Math.floor((gw / gridW) * width);
      const pixelOffset = rowOffset + 1 + x * bytesPerPixel;
      
      let r = 255, g = 255, b = 255, a = 255;
      if (colorType === 2) {
        r = inflated[pixelOffset];
        g = inflated[pixelOffset + 1];
        b = inflated[pixelOffset + 2];
      } else if (colorType === 6) {
        r = inflated[pixelOffset];
        g = inflated[pixelOffset + 1];
        b = inflated[pixelOffset + 2];
        a = inflated[pixelOffset + 3];
      }
      
      // Calculate brightness (average)
      const brightness = (r + g + b) / 3;
      // If alpha is transparent, or it is bright white (e.g. background), it is considered "background"
      if (a < 50 || brightness > 240) {
        grid[gh][gw] = '.'; // White background / transparent
      } else {
        grid[gh][gw] = '#'; // Person / foreground
      }
    }
  }
  
  console.log('\nLow-res visual grid ( # = Subject, . = Background ):');
  console.log(grid.map(row => row.join('')).join('\n'));
}

analyzePng('d:/Project-Mainfiles/portfolio/2.0/public/Mithun.png');
