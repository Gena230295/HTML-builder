const path = require('path');
const fs = require('fs');
const process = require('process');
const processStDin = require('process').stdin;

const absPath = path.join(__dirname, 'text.txt');
fs.appendFile(absPath, '', () => {
  console.log('Please, enter your text:');
});

processStDin.on('data', (change) => {
  fs.appendFile(absPath, change, () => {});
  const checkWord = String(change).trim();
  if (checkWord === 'exit') {
    console.log('You have finished entering text.');
    process.exit();
  }
});

process.on('SIGINT', () => {
  console.log('You have finished entering text.');
  process.exit();
});

// node 02-write-file
