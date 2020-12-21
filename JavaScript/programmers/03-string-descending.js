// 문자열 내림차순으로 배치하기

// 답안
function solution(s) {
    const answer = s.split("");
    return answer.sort().reverse().join('');
}


// 코드 줄이기
// function solution(s) {
//     return s.split("").sort().reverse().join('');
// }

// const solution = s => s.split("").sort().reverse().join('');


// 연습
// function solution(s) {
//     s.sort((a, b) => a - b);
// }
// solution("Zbcdefg");

// function solution(s) {
//     const answer = s.split("");
//     return answer.sort((a, b) => CharCodeAt(a) - CharCodeAt(b));
// }
// solution("Zbcdefg");