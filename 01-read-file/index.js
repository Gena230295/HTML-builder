const path = require('path');
const fs = require('fs');

const absPath = path.join(__dirname, 'text.txt');
const fileHtml = fs.createReadStream(absPath);
fileHtml.on('data', (myFile) => {
  console.log(String(myFile));
});

// node 01-read-file
