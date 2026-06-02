import fs from 'fs';

const glbPath = 'd:/Project-Mainfiles/portfolio/2.0/public/glb/card-BP4TWJmK.glb';

const fd = fs.openSync(glbPath, 'r');
const header = Buffer.alloc(12);
fs.readSync(fd, header, 0, 12, 0);

const magic = header.readUInt32LE(0);
const version = header.readUInt32LE(4);
const length = header.readUInt32LE(8);

console.log('GLB Info:');
console.log('Magic:', magic.toString(16));
console.log('Version:', version);
console.log('Total Length:', length);

const chunkHeader = Buffer.alloc(8);
fs.readSync(fd, chunkHeader, 0, 8, 12);
const chunkLength = chunkHeader.readUInt32LE(0);
const chunkType = chunkHeader.readUInt32LE(4);

console.log('First Chunk Length:', chunkLength);
console.log('First Chunk Type:', chunkType.toString(16)); // Should be 4e4f534a (JSON)

const jsonBuffer = Buffer.alloc(chunkLength);
fs.readSync(fd, jsonBuffer, 0, chunkLength, 20);
fs.closeSync(fd);

const jsonStr = jsonBuffer.toString('utf8');
const gltf = JSON.parse(jsonStr);

console.log('\nGLTF Materials:');
console.log(JSON.stringify(gltf.materials, null, 2));

console.log('\nGLTF Textures:');
console.log(JSON.stringify(gltf.textures, null, 2));
