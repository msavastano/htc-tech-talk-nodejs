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

// Native in Node 4, before that npm libraries, ex bluebird
const readFiles = () => {
  // Promise.all([rf1(), rf2(), rf3()])
  //   .then((results) => {
  //     console.log(String(results[0] + results[1] + results[2]));
  //   });

  let final = '';
  rf1()
    .then((r2) => {
      final+=r2;
      return rf2();
    })
    .then((r3) => {
      final+=r3;
      return rf3();
    })
    .then((f) => {
      const end = final+=f;
      console.log(String(end));
    })
}

readFiles();