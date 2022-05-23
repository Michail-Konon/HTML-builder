
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname);

fs.readdir(dir, (err, files) => {
    if (err) {
        console.log(err);
      };

  if (!files.includes('files-copy')) {
    fs.mkdir(`${dir}/files-copy`, err => {
        if (err) {
            console.log(err);
          };
    });
  }
});

fs.readdir(`${dir}/files`, (err, files) => {
    if (err) {
        console.log(err);
      };

  files.forEach(file => {
    fs.copyFile(`${dir}/files/${file}`, `${dir}/files-copy/${file}`, err => {
        if (err) {
            console.log(err);
          };
    });
  });

  console.log('Done');
});
