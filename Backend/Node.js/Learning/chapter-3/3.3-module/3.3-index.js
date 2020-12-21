const {odd, even} = require('./3.3-var');
const checkNumber = require('./3.3-func');

function checkStringOddOrEvsn(str) {
    if(str.length % 2) { // 홀수면
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEvsn('hello'));