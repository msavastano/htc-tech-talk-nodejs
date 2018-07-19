const fs = require('fs');

const thisIsTheCB = (f) => {
    console.log(f);
};

// Call Back Hell
const readFiles = (cb) => {
    let fullFile = '';
    fs.readFile('./index.1.html', function (err, data) {
        if (err) {
            throw err;
        }
        fullFile += data
        fs.readFile('./index.2.html', function (err, data1) {
            if (err) {
                throw err;
            }
            fullFile += data1
            fs.readFile('./index.3.html', function (err, data2) {
                if (err) {
                    throw err;
                }
                fullFile += data2
                cb(fullFile);
            });
        });
    });
}

readFiles(thisIsTheCB);