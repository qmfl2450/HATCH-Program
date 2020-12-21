// 평균 구하기




// function solution(arr) {
//     let answer = 0;
//     for(i = 0; i <arr.length; i++) {
//         answer += arr[i];
//     }
//     return answer / arr.length;
// }
// console.log(solution([1,2,3]));


function solution(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}
console.log(solution([1,2,3]));