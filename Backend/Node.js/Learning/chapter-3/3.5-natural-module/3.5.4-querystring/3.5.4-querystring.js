const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://gilbut.co.kr/?page=3&limit=10&category=node.js&category=javascript');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));