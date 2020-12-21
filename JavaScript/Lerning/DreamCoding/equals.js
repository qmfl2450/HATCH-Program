'use strict';
// const a= 1
// const b= 1
// console.log(a ===b);

// const browser = 'IE';
// switch (browser) {
// 	case 'IE' :
// 		console.log('go away!');
// 		break;
// 	case 'Chrome' :
// 	case 'Firefox' :
// 		console.log('love you!');
// 		break;
// 	default:
// 		console.log('same all!');
// 		break;
// }


// function log(message) {
// 	console.log(message);
// }
// log('Hello');

// function changeName(x) {
// 	x.name = 'coder';
// }
// const ellie = { name: 'ellie' };
// changeName(ellie);
// console.log(ellie);

// function showMessage(message, from = 'unknown') {
// 	console.log(`${message} by ${from}`);
// }
// showMessage('Hi!');

// let i = 3;
// while (i > 0) {
// 	console.log('while: ${i}');
// 	i--;
// }


// function log(message) {
// 	console.log(message);
// }
// log('Hello');

// function printAll(...args) {
// 	for (const arg of args) {
// 		console.log(arg);
// 	}
// }
// printAll('dream', 'coding', 'ellie');

// function printAll(...args) {
// 	for (let i = 0; i < args.length; i++) {
// 		console.log(args[i]);
// 	}
// }
// printAll('dream', 'coding', 'ellie');


// let globalMessage = 'global';
// function printMessage() {
// 	let message = 'hello';
// 	console.log(message);
// 	console.log(globalMessage);
// }
// printMessage();
// console.log(message);

// function sum(a, b) {
// 	return a + b;
// }
// const result = sum(1, 2)
// console.log(`sum: ${sum(1, 2)}`);


// const print = function() {
// 	console.log('print');
// };
// print();
// const printAgain = print;
// printAgain();
// const sumAgain = sum;
// console.log(sumAgain(1, 3));



// function randomQuiz(answer, printYes, printNo) {
// 	if(answer === 'love you') {
// 		printYes();
// 	} else {
// 		printNo();
// 	}
// }
// const printYes = function() {
// 	console.log('yes!');
// };

// const printNo = function print() {
// 	console.log('no!');
// };
// randomQuiz('wrong', printYes, printNo);
// randomQuiz('love you', printYes, printNo);


// (function hello() {
// 	console.log('IIFE');
// })();


