const path = require('path');

console.log(path.sep);

const filePath = path.join('content', 'subfolder/', 'file.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const abs = path.resolve('content', 'subfolder', 'file.txt');
console.log(abs);
