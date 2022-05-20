const fs = require('fs');
const path = require('path');

const setPath = path.join(__dirname, 'text.txt');
const newStream = fs.createReadStream(setPath, 'utf-8');

newStream.on('data', text => console.log(text));
