const fs = require('fs').promises;

fs.writeFile('./3.6.0-writeme.txt', '글이 입력됩니다')
    .then(() => {
        return fs.readFile('./3.6.0-readme.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });