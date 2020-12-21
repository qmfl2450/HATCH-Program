// 두 정수 사이의 합

// 답안
// function solution(a, b) {
//     let answer = 0;
//     for(let i = 0; i < Math.abs(b - a) + 1; i++) {
//         a <= b ? answer += a + i : answer += b + i;
//     }
//     return answer;
// }


// 연습
// function solution(a, b) {
//     if (a = b) {return a;}
//     let i = 0;
//     for (i = a + 1; a + i < b; i++) {
//         i += i;
//     }
//     console.log(a + i + b);
// }
// solution(3, 3);


// function solution(a, b) {
//     let answer = 0;
//     if (b >= a) {
//         for(let i = 0; i < b - a + 1; i++) {
//             answer += a + i;
//         }
//         console.log(answer);
//     }
//     if (a > b) {
//         for(let i = 0; i < a - b + 1; i++) {
//             answer += b + i;
//         }
//         console.log(answer);
//     }
// }
// solution(5, 3);



// function solution(a, b) {
//     let answer = 0;
//     for(let i = 0; i < Math.abs(b - a) + 1; i++) {
//         if (a <= b) {
//             answer += a + i;
//         }
//         if (a > b) {
//             answer += b + i;
//         }
//     }
//     console.log(answer);
//     }
// solution(5, 3);


// function solution(a, b) {
//     let answer = 0;
//     for(let i = 0; i < Math.abs(b - a) + 1; i++) {
//         a <= b ? answer += a + i : answer += b + i;
//     }
//     return answer;
// }
// solution(3, 5);

// let answer = 0;
// const solution = (a, b) => {
//     for(let i = 0; i < Math.abs(b - a) + 1; i++) {
//         a <= b ? answer += a + i : answer += b + i;
//     }
//     console.log(answer);
// }
// solution(3, 5);