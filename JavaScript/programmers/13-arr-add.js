// 행렬의 덧셈


// 오답
function solution(arr1, arr2) {
    const answer = new Array(arr1.length);
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = new Array(arr1[i].length)
        for (let j = 0; j < arr1[i].length; j++) {
            const sum = arr1[i][j] + arr2[i][j];
            answer[i].push(sum);
        }
    }
    return answer;
}
// new Array로 null인 item들을 만들어 놓은 상태에서 push를 사용하니까 null item들이 그대로 존재하고, 그 이후에 push됨
// 즉, new Array로 생성된 item들도 존재감이 있음


function solution(arr1, arr2) {
    const answer = new Array(arr1.length);
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = new Array(arr1[i].length);
        for (let j = 0; j < arr1[i].length; j++) {
            const sum = arr1[i][j] + arr2[i][j];
            answer[i][j] = sum;
        }
    }
    return answer;
}
console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]));