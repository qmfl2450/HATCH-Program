'use strict';

// 4강
// Quiz 1. 0부터 10까지 짝수만
// for(let i = 0; i < 11; i++) {
//     if(i==1 || i==3 || i==5 || i==7 || i==9) {
//         continue;
//     }
//     console.log(i);
// }

// Quiz 1. 정답
// for(let i = 0; i < 11; i++) {
//     if(i % 2 !==0) {
//         continue;
//     }
//     console.log(i);
// }

// Quiz 2. 0부터 10까지 출력하되, 8에 도달하면 멈추기
// for(let i=0; i<11; i++) {
//     if(i===9) {
//         break;
//     }
//     console.log(i);
// }

// Quiz 2. 정답
// for(let i=0; i<11; i++) {
//     if(i > 8) {
//         break;
//     }
//     console.log(i);
// }


// 5강
// Quiz 1. function calculate를 만들어서 입력받은 command에 따라서 
//         숫자 a, b를 add, substract, divide, multiply, remainder 
//         할 수 있도록 할 것


// function calculate(command, a, b) {
//     if(command==='add') {
//         console.log(a+b);
//     }
//     if(command==='substract') {
//         console.log(a-b);
//     }
//     if(command==='divide') {
//         console.log(a/b);
//     }
//     if(command==='multiply') {
//         console.log(a*b);
//     }
//     if(command==='remainder') {
//         console.log(a%b);
//     }
// }
// calculate('remainder', 5, 2);



function calculate(command, a, b) { 
    switch(command) {
        case 'add' :
            console.log(a+b);
            break;
        case 'substract' :
            console.log(a-b);
            break;
        case 'divide' :
            console.log(a/b);
            break;
        case 'multiply' :
            console.log(a*b);
            break;
        case 'remainder' :
            console.log(a%b);
            break;
    }
}
calculate('add', 5, 2)