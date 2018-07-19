const {promisify} = require('util');
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);

// Node version 8
const readFiles = async () => {
  const one =  await readFileAsync('./index.1.html');
  const two = await readFileAsync('./index.2.html');
  const three = await readFileAsync('./index.3.html');
  console.log(String(one + two + three));
}

readFiles();