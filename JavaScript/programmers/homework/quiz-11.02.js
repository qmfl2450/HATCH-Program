// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
//배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
//예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.

// 답안
function solution(n, m) {
    const answer = [];
    const arrn = [];
    const arrm = [];

    for(let i = 1; i < n + 1; i++) {
        if(n % i === 0) {
            arrn.push(i);
        }
    }
    for(let j = 1; j < m + 1; j++) {
        if(m % j === 0) {
            arrm.push(j);
        }
    }

    const nm = arrn.filter(x => arrm.includes(x));


    answer.push(nm[nm.length - 1]);
    answer.push(n * m / nm[nm.length - 1]);

    return answer;
}


// function solution(n, m) {
//     const answer = [];
//     const nmeasure = [];
//     const mmeasure = [];
//     const nmmeasure = [];

//     for(let i = 1; 0 < i < n + 1; i++) {
//         if(n % i === 0) {
//             nmeasure.push(i);
//             return nmeasure;
//         }
//     }
//     for(let j = 1; 0 < j < m + 1; j++) {
//         if(m % j === 0) {
//             mmeasure.push(j);
//             return mmeasure;
//         }
//     }

//     nmmeasure.push(nmeasure & mmeasure);

//     answer.push(math.sqrt(nmmeasure, nmmeasure.length / 2));
//     answer.push(math.sqrt(nmmeasure, nmmeasure.length / 2) * n * m);

//     console.log(answer);
// }
// solution(3, 12);




// function solution(n, m) {
//     const answer = [];
//     const arrn = [];
//     const arrm = [];
//     const nm = [];

//     for(let i = 1; i < n + 1; i++) {
//         if(n % i === 0) {
//             arrn.push(i);
//             console.log(arrn);
//         }
//     }
//     for(let j = 1; j < m + 1; j++) {
//         if(m % j === 0) {
//             arrm.push(j);
//             console.log(arrm);
//         }
//     }

//     nm.push(arrn & arrm);
//     answer.push(nm[nm.length - 1]);
//     answer.push(nm[nm.length - 1] * n * m);

//     return answer;
// }
// console.log(solution(3, 12));




// function solution(n, m) {
//     const answer = [];
//     const arrn = [];
//     const arrm = [];

//     for(let i = 1; i < n + 1; i++) {
//         if(n % i === 0) {
//             arrn.push(i);
//             console.log(arrn);
//         }
//     }
//     for(let j = 1; j < m + 1; j++) {
//         if(m % j === 0) {
//             arrm.push(j);
//             console.log(arrm);
//         }
//     }

//     let nm = arrn.filter(x => arrm.includes(x));


//     answer.push(nm[nm.length - 1]);
//     answer.push(n * m * Math.pow(nm[nm.length - 1], 3));

//     return answer;
// }
// console.log(solution(3, 12));