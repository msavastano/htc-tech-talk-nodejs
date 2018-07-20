const fs = require('fs');

// CallBack Hell
const readFiles = () => {
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
                console.log(fullFile);
            });
        });
    });
}

readFiles();