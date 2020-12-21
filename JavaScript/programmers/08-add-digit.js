// 자릿수 더하기

// 답안
function solution(n)
{
    let answer = 0;
    const num = String(n).split('');
    for(let i = 0; i < num.length; i++) {
        answer += Number(num[i]);
    }
    return answer;
}
console.log(solution(10));