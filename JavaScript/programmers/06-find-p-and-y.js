// 문자열 내의 p와 y의 개수

// function solution(s) {
//     const arr = s.split('');
//     let p = 0;
//     let y = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 'p' || arr[i] == 'P') {
//             p++;
//         }
//         if (arr[i] == 'y' || arr[i] == 'Y') {
//             y++;
//         }
//     }
//     return p === y ? true : false;
// }


// function solution(s) {
//     let p = 0;
//     let y = 0;
//     for (let i = 0; i < s.length; i++) {
//         const n = s.charCodeAt(i);
//         if (n == 80 || n == 112) { p += 1 }
//         if (n == 89 || n == 121) { y += 1 }
//     }
//     return p === y ? true : false;
// }