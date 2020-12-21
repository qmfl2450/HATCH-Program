// K번째 수

// 답안
// function solution(array, commands) {
//     const answer = [];
//     const arr = [];
//     for (let j = 0; j < commands.length; j++) {
//         for (let i = commands[j][0] - 1; i < commands[j][1]; i++) {
//             arr.push(array[i]);
//         }
//         arr.sort((a, b) => a - b);
//         answer.push(arr[commands[j][2] - 1]);
//         arr.length = 0;
//     }
//     return answer;
// }


// function solution(array, commands) {
//     const answer = [];
//     const arr = [];
//     for (i = commands[0] - 1; i < commands[1]; i++) {
//         arr.push(array[i]);
//     }
//     arr.sort((a, b) => a - b);
//     console.log(arr[commands[2] - 1]);
// }
// solution([1,5,2,6,3,7,4], [2,5,3]);



// function solution(array, commands) {
//     const answer = [];
//     for (let j = 0; j < commands.length; j++) {
//         array = array.filter((n, i) => commands[j][0] - 1 <= i && i < commands[j][1]).sort((a, b) => a - b);
//         answer.push(array[commands[j][2] - 1]);
//     }
//     return answer;
// }
// solution([1,5,2,6,3,7,4], [[2,5,3], [4,4,1], [1,7,3]]);




// function solution(array, commands) {
//     const answer = [];
//     const arr = [];
//     for (let j = 0; j < commands.length; j++) {
//         for (let i = commands[j][0] - 1; i < commands[j][1]; i++) {
//             arr.push(array[i]);
//         }
//         arr.sort((a, b) => a - b);
//         answer.push(arr[commands[j][2] - 1]);
//         arr.length = 0;
//     }
//     console.log(answer);
// }
// solution([1,5,2,6,3,7,4], [[2,5,3], [4,4,1], [1,7,3]]);