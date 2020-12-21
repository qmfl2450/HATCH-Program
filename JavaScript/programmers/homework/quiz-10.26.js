// 1. 가운데 글자 가져오기
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 제한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

// 기본
// function solution(s) {
//     let answer = '';
//     return answer;
// }

// 답안
function solution(s) {
    if(s.length%2===1) {
        console.log(s.substring(s.length/2, (s.length/2)+1));
    }
    else {
        console.log(s.substring((s.length/2)-1, (s.length/2)+1));
    }
}
solution('');



// 2. 두 개 뽑아서 더하기
// 정수 배열 numbers가 주어집니다. 
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 
// 만들 수 있는 모든 수를 배열에 오름차순으로 담아 
// return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.

// 기본
// function solution(numbers) {
//     var answer = [];
//     return answer;
// }

// 답안

function solution(numbers) {
    const answer = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i]+numbers[j]);
        }
    }
    const set = [...new Set(answer)];
    set.sort(function(a, b) {
        return a-b;
    });
    return set;
}


// 실행 테스트
// function solution(numbers) {
//     const sum = [solution.numbers];

//     for(let i = 0; i < sum.length; i++) {
//         for(let j = 0; j < sum.length; j++) {
//             if(i!==j) {
//                 console.log(sum[i]+sum[j]);
//             }
//         }
//     }
// }
// solution(1,2,3,4,5);

// function solution(numbers) {
//     for(let i = 0; i < arguments.length; i++) {
//         for(let j = i + 1; j < arguments.length; j++) {
//                 console.log(arguments[i] + arguments[j]);
//         }
//     }
// }
// solution(1, 2, 3, 4);

//

// function solution(numbers) {
//     for(let i = 0; i < numbers.length; i++) {
//         for(let j = i + 1; j < numbers.length; j++) {
//                 console.log(numbers[i] + numbers[j]);
//         }
//     }
// }
// solution(1, 2, 3, 4);



// function solution(numbers) {
//     let answer = [];
//     for(let i = 0; i < numbers.length; i++) {
//         for(let j = i + 1; j < numbers.length; j++) {
//                 let sum = numbers[i]+numbers[j];
//                 answer.push(sum);
//         }
//     }
//     return answer;
// }
// solution(1,2,3,4);