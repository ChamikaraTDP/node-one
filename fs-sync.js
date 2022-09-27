const { readFileSync, writeFileSync } = require('fs');

const file1 = readFileSync('./content/file1.txt');
const file2 = readFileSync('./content/file2.txt');

writeFileSync('./content/result.txt', `result is: ${file1}, ${file2}`, { flag: 'a' });


