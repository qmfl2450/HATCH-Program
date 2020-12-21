const fs = require('fs').promises;

console.log('시작');
fs.readFile('./3.6.1-readme2.txt')
    .then((data) => {
        console.log('1번', data.toString());
        return fs.readFile('./3.6.1-readme2.txt');  // 이 부분이 순서대로 작동하게 하는 듯
    })
    .then((data) => {
        console.log('2번', data.toString());
        return fs.readFile('./3.6.1-readme2.txt');
    })
    .then((data) => {
        console.log('3번', data.toString());
        console.log('끝');
    })
    .catch((err) => {
        console.error(err);
    });