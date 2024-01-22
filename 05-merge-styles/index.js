const fs = require('fs');
const path = require('path');

const cssPath = `${__dirname}/project-dist`;
const absPath = path.join(__dirname, 'styles');
const secondPath = path.join(cssPath, 'bundle.css');

fs.truncate(secondPath, () => {});
fs.readdir(absPath, (err, cssFiles) => {
  if (err) {
    console.log(err);
  } else {
    cssFiles.forEach((el) => {
      fs.stat(`${absPath}/${el}`, (err, newEl) => {
        if (err) {
          console.log(err);
        } else {
          const arr = el.split('.');
          const extEl = arr.slice(arr.length - 1, arr.length).join('');
          if (extEl === 'css' && newEl.isFile()) {
            fs.readFile(`${absPath}/${el}`, (err, cssFiles) => {
              if (err) {
                console.log(err);
              } else {
                fs.appendFile(secondPath, cssFiles, (err) => {
                  if (err) {
                    console.log(err);
                  }
                });
              }
            });
          }
        }
      });
    });
  }
});

// node 05-merge-styles
