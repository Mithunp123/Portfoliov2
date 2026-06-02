import fs from 'fs';
import path from 'path';

function getPngDimensions(filePath) {
  const buffer = Buffer.alloc(8);
  const fd = fs.openSync(filePath, 'r');
  fs.readSync(fd, buffer, 0, 8, 16); // PNG dimensions are at offset 16 (4 bytes width, 4 bytes height)
  fs.closeSync(fd);
  const width = buffer.readUInt32BE(0);
  const height = buffer.readUInt32BE(4);
  return { width, height };
}

const cardTexturePath = 'd:/Project-Mainfiles/portfolio/2.0/src/components/Lanyard/card-texture.png';
const mithunPath = 'd:/Project-Mainfiles/portfolio/2.0/public/Mithun.png';

console.log('card-texture.png dimensions:', getPngDimensions(cardTexturePath));
console.log('Mithun.png dimensions:', getPngDimensions(mithunPath));
