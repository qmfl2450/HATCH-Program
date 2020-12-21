// 제일 작은 수 제거하기

// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 답안
function solution (arr) {
    if(arr.length == 1) return [-1];
    let n = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < n) {
            n = arr[i];
        }
    }
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] == n) {
            arr.splice(j, 1);
            break;
        }
    }
    return arr;
}
console.log(solution([4,3,2,1]));
console.log(solution([10]));