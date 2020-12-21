// 소수 찾기

// 답안
function solution(n) {
    const answer = [];
    if(n > 1) answer.push(2);
    for(let i = 3; i <= n; i += 2) {
        let count = 0;
        for(let j = 0; j < answer.length; j++) {
            if(i % answer[j] === 0) {
            count++;
            break;
            }
            if(answer[j] * answer[j] > i) break;
        }
        if(count === 0) answer.push(i);
    }
    return answer.length;
}
console.log(solution(10));

// function solution(n) {
//     let answer = 0;
//     const arr = [];
//     for (i = 2; i <= n; i++) {
//         for (j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 arr.push(i);
//                 arr.includes(i) === false ? answer++
//             }
//         }
//     }
// }
// console.log(solution(10));


// function solution(n) {
//     const arr = [];
//     for (i = 2; i <= n; i++) {
//         arr.push(i);
//     }
//     for (i = 0; i < arr.length; i++) {
//         for (j = 2; j < arr.length; j++) {
//             if (arr[i] % j === 0) {
//                 arr.splice(i, 1);
//             }
//         }
//     }
// }
// console.log(solution(10));


// function solution(n) {
//     let answer = 0;
//     const arr = [];
//     const narr = [];
//     for (i = 2; i <= n; i++) {
//         arr.push(i);
//     }
//     for (i = 0; i < arr.length; i++) {
//         for (j = 2; j < arr.length; j++) {
//             if (arr[i] % j === 0) {
//                 narr.push(arr[i]);
//                if (narr.length == 0) {
//                     answer++;
//                     narr.length = 0;
//                }
//             }
//         }
//     }
// }
// console.log(solution(10));




// function solution(n) {
//     let answer = 0;
//     for (i = 2; i <= n; i++) {
//         for (j = 2; j < i; j++) {
//             let TF = true;
//             if (i % j === 0) TF = false;
//         }
//     }
//     return answer;
// }
// console.log(solution(10));




// function solution(n) {
//     let answer = 1;
//     const arr = [];
//     for(let i = 3; i <= n; i++) {
//         for(let j = 2; j < (i / 2) + 1; j++) {
//             if(i % 2 === 0) {
//                 arr.push(1);
//                 break;
//             }
//             if(i % j === 0) arr.push(j);
//             if(arr.length > 0) break;
//         }
//         if(arr.length === 0) answer++;
//         arr.length = 0;
//     }
//     return answer;
// }
// console.log(solution(10));


// function solution(n) {
//     const answer = [];
//     if(n > 1) answer.push(2);
//     for(let i = 3; i <= n; i += 2) {
//         let count = 0;
//         for(let j = 0; j < answer.length; j++) {
//             if(i % answer[j] === 0) {
//             count++;
//             break;
//             }
//             if(answer[j] * answer[j] > i) break;
//         }
//         if(count === 0) answer.push(i);
//     }
//     return answer.length;
// }
// console.log(solution(10));



// function solution(n) {
//     let answer = 0;
//     if(n >= 2) answer++;
//     for(let i = 3; i <= n; i += 2) {
//         if(i === 3) answer++;
//         if(i % 6 === 1 || i % 6 === 5) answer++;
//     }
//     return answer;
// }
// console.log(solution(100));