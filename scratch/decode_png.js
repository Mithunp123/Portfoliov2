import fs from 'fs';
import zlib from 'zlib';

function decodePng(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  
  if (fileBuffer.readUInt32BE(0) !== 0x89504E47 || fileBuffer.readUInt32BE(4) !== 0x0D0A1A0A) {
    throw new Error('Not a valid PNG file');
  }
  
  let offset = 8;
  let width = 0;
  let height = 0;
  let colorType = 0;
  const idatChunks = [];
  
  while (offset < fileBuffer.length) {
    const length = fileBuffer.readUInt32BE(offset);
    const type = fileBuffer.toString('ascii', offset + 4, offset + 8);
    const data = fileBuffer.subarray(offset + 8, offset + 8 + length);
    
    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      colorType = data[9];
    } else if (type === 'IDAT') {
      idatChunks.push(data);
    } else if (type === 'IEND') {
      break;
    }
    
    offset += 12 + length;
  }
  
  const idatBuffer = Buffer.concat(idatChunks);
  const inflated = zlib.inflateSync(idatBuffer);
  
  let bytesPerPixel = 3;
  if (colorType === 6) bytesPerPixel = 4;
  else if (colorType === 0) bytesPerPixel = 1;
  else if (colorType === 4) bytesPerPixel = 2;
  
  const scanlineLength = 1 + width * bytesPerPixel;
  const pixels = Buffer.alloc(width * height * bytesPerPixel);
  
  // PNG Unfiltering
  for (let y = 0; y < height; y++) {
    const rowOffset = y * scanlineLength;
    const filterType = inflated[rowOffset];
    
    for (let x = 0; x < width; x++) {
      const destIndex = (y * width + x) * bytesPerPixel;
      const srcIndex = rowOffset + 1 + x * bytesPerPixel;
      
      for (let c = 0; c < bytesPerPixel; c++) {
        const rawByte = inflated[srcIndex + c];
        
        let a = 0; // Left neighbor
        let b = 0; // Top neighbor
        let cNeighbor = 0; // Top-left neighbor
        
        if (x > 0) {
          a = pixels[destIndex - bytesPerPixel + c];
        }
        if (y > 0) {
          b = pixels[destIndex - width * bytesPerPixel + c];
        }
        if (x > 0 && y > 0) {
          cNeighbor = pixels[destIndex - (width + 1) * bytesPerPixel + c];
        }
        
        let reconByte = 0;
        if (filterType === 0) {
          reconByte = rawByte;
        } else if (filterType === 1) {
          reconByte = (rawByte + a) & 255;
        } else if (filterType === 2) {
          reconByte = (rawByte + b) & 255;
        } else if (filterType === 3) {
          reconByte = (rawByte + Math.floor((a + b) / 2)) & 255;
        } else if (filterType === 4) {
          // Paeth filter
          const p = a + b - cNeighbor;
          const pa = Math.abs(p - a);
          const pb = Math.abs(p - b);
          const pc = Math.abs(p - cNeighbor);
          
          let pr = cNeighbor;
          if (pa <= pb && pa <= pc) pr = a;
          else if (pb <= pc) pr = b;
          
          reconByte = (rawByte + pr) & 255;
        }
        
        pixels[destIndex + c] = reconByte;
      }
    }
  }
  
  return { width, height, pixels, bytesPerPixel };
}

function printAsciiGrid(filePath, name) {
  const { width, height, pixels, bytesPerPixel } = decodePng(filePath);
  const gridW = 40;
  const gridH = 30;
  const grid = Array.from({ length: gridH }, () => Array(gridW).fill(' '));
  
  for (let gh = 0; gh < gridH; gh++) {
    const y = Math.floor((gh / gridH) * height);
    for (let gw = 0; gw < gridW; gw++) {
      const x = Math.floor((gw / gridW) * width);
      const pixelIdx = (y * width + x) * bytesPerPixel;
      
      const r = pixels[pixelIdx];
      const g = pixels[pixelIdx + 1];
      const b = pixels[pixelIdx + 2];
      let a = 255;
      if (bytesPerPixel === 4) a = pixels[pixelIdx + 3];
      
      const brightness = (r + g + b) / 3;
      if (a < 50 || brightness > 230) {
        grid[gh][gw] = '.';
      } else {
        grid[gh][gw] = '#';
      }
    }
  }
  
  console.log(`\n--- ${name} (${width}x${height}) ---`);
  console.log(grid.map(row => row.join('')).join('\n'));
}

printAsciiGrid('d:/Project-Mainfiles/portfolio/2.0/src/components/Lanyard/card-texture.png', 'card-texture.png');
printAsciiGrid('d:/Project-Mainfiles/portfolio/2.0/public/Mithun.png', 'Mithun.png');
