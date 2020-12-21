const {odd, even} = require('./3.4.5.1-exports-var');

function checkStringOddOrEvsn(str) {
    if(str.length % 2) { // 홀수면
        return odd;
    }
    return even;
}

console.log(checkStringOddOrEvsn('hello'));