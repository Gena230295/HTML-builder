const path = require('path');
const fs = require('fs');
const absPath = path.join(__dirname, 'files');
const newFolder = path.join(__dirname, 'files-copy');
const notError = { recursive: true };

fs.mkdir(newFolder, notError, (err) => {
  if (err) {
    console.log(err);
  }
});

fs.readdir(newFolder, (err, allNewFolder) => {
  if (err) {
    console.log(err);
  } else {
    allNewFolder.forEach((el) => {
      fs.unlink(`${newFolder}/${el}`, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
});

fs.readdir(absPath, (err, allFolder) => {
  if (err) {
    console.log(err);
  } else {
    allFolder.forEach((el) => {
      fs.copyFile(`${absPath}/${el}`, `${newFolder}/${el}`, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
});
// node 04-copy-directory
