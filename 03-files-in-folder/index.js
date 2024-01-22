const path = require('path');
const fs = require('fs');
const absPath = path.join(__dirname, 'secret-folder');

fs.readdir(absPath, (err, allFolder) => {
  if (err) {
    console.log(err);
  } else {
    allFolder.forEach((el) => {
      const pathFiles = `${absPath}/${el}`;
      fs.stat(pathFiles, (err, newEl) => {
        if (err) {
          console.log(err);
        } else {
          if (newEl.isFile()) {
            const sizeKb = newEl.size / 1000;
            const nameFile = el.split('.');
            const firstName = nameFile.slice(0, nameFile.length - 1).join('.');
            const extName = nameFile
              .slice(nameFile.length - 1, nameFile.length)
              .join('');
            const finStr = `${firstName} - ${extName} - ${sizeKb}kb`;
            console.log(finStr);
          }
        }
      });
    });
  }
});

// node 03-files-in-folder
