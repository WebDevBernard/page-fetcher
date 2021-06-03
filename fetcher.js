const request = require('./node_modules/request');
const fs = require('fs');
const url = process.argv[2];
const path = process.argv[3];
request(url, (error, response, body) => {
  fs.writeFile(path, body, error => {
    if (error) {
      console.log(error);
    }
    console.log(`Downloaded and saved .${body.length} bytes to ${path}`);
  });
});

