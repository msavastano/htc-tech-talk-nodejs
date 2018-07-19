const fs = require('fs');

const rf1 = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./index.1.html', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  });
}

const rf2 = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./index.2.html', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  });
}

const rf3 = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./index.3.html', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  });
}

// Node version 8
const readFiles = async () => {
  const one = await rf1();
  const two = await rf2();
  const three = await rf3();
  console.log(String(one + two + three));
}

readFiles();