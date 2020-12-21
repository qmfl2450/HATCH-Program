const url = require('url');

const {URL} = url;
const myURL = new URL('http://gilbut.co.kr/book/booklist.aspx?sercate1=001001000#anchor');  // WHATWG 방식

console.log('new URL:', myURL);
console.log('url.format():', url.format(myURL));

console.log('------------------------------------');

const parsedUrl = url.parse('http://gilbut.co.kr/book/booklist.aspx?sercate1=001001000#anchor');  // 기존 노드 방식

console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));