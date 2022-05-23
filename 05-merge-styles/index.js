const fs = require('fs');
const path = require('path');

const stylesDir = path.join(__dirname, 'styles');
const writeStream = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));



fs.readdir(stylesDir, (err, files) => {
    files.forEach(file => {
  if (err) {
       console.log(err); 
    }
    const filePath = path.join(stylesDir, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log(err);
        } if (stats.isFile() && path.extname(filePath) === '.css') {
            const readableStream = fs.createReadStream(filePath, 'utf-8');
            readableStream.pipe(writeStream);
        }
    });
  });
});
  
