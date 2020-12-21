// 문자열 다루기 기본
// 답안
// function solution(s) {
//     if((s.length == (4 || 6)) && (/\D/.test(s) == false)) {
//         return true;
//        } else {
//         return false;
//     }
// }

// 코드 줄이기
// const solution = s => ((s.length == (4 || 6)) && (/\D/.test(s) == false));

// 연습
// function solution(s) {
//     if((s.length == 4 || 6) && (/\D/.test(s) == false)) {
//         console.log(true);
//        } else {
//         console.log(false);
//     }
// }
// solution('\1230');

// function solution(s) {
//     for(let i = 0; i < s.length; i++)
//     if((s.length == 4 || 6) && (s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58)){
//         return true;
//     }else{
//         return false;
//     }
// }
// solution('abcde');


// function solution(s) {
//     for(let i = 0; i < s.length; i++) {
//      if((s.length == 4 || 6) && (/\d/.test(s[i]) == true)) {
//         } else {
//         return false;
//         }
//         return true;
//     }
// }