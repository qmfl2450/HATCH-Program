// 1부터 100까지 숫자가 주어짐
// 3의 배수와 5의 배수의 count를 구하는 알고리즘

// 제출
function count(n) {
    let answer;
    if (n % 3 === 0 || n % 5 === 0) {
        answer += 1;
    }
    return answer;
}
// -> for문이 빠짐



// 보완
function count(n) {
    let answer = 0;
    for (i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            answer += 1;
        }
    }
    return answer;
}


// 더 보완
function count(n) {
    let answer = 0;
    for (i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            answer++;
        }
    }
    return answer;
}
count(20);