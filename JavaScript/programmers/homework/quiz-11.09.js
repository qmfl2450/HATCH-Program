// 1. 나누어 떨어지는 숫자 배열

//답안
function solution(arr, divisor) {
    const answer = arr.filter(i => i % divisor === 0);
    if(answer.length === 0) {
        answer.push('-1');
    } else {
        answer.sort((a, b) => a - b);
    }
    return answer;
}


// function solution(arr, divisor) {
//     const answer = [];
//     if(arr[i] % divisor === 0) {
//         answer.push(arr[i]);
//     }
//     return answer.sort(a, b) => a - b;
// }




// function solution(arr, divisor) {
//     const answer = arr.filter(i => i % divisor === 0);
//     if(answer.length === 0) {
//         return -1;
//     }
//     return answer.sort((a, b) => a - b);
// }


// function solution(arr, divisor) {
//     const answer = arr.filter(i => i % divisor === 0);
//     if(answer.length === 0) {
//         console.log(answer.push(-1));
//     } else {
//         console.log(answer.sort((a, b) => a - b));
//     }
// }
// solution([3, 2, 6], 10);




// 2. 완주하지 못한 선수

// 답안
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}


// function solution(participant, completion) {
//     participant.sort((a, b) => a - b);
//     completion.sort((a, b) => a - b);
    
// }


// function solution(participant, completion) {
//     const answer = [];
//     participant.sort();
//     completion.sort();
//     return answer.filter(function(i) {
//         if(participant[i] !== completion[i]) {
//             break;
//         }
//         return participant[i];
//     }
//     )
// }

// participant.sort((a, b) => a - b);
// completion.sort((a, b) => a - b);



// for(let i = 0; i < participant.length; i++) {
//     if(completion.includes(participant[i]) == false) {
//         return participant[i];
//     }
// }


// 3. 모의고사

// 답안
function solution(answers) {
    const answer = [];
    const maxpoint = [];
    let dong = [1, 2, 3, 4, 5];
    let yeol = [2, 1, 2, 3, 2, 4, 2, 5];
    let quokka = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    for(let i = 0; i < answers.length; i++) {
        if(dong.length > answers.length) {
            break;
        }
        if(dong.length < answers.length) {
            dong.push(dong[i]);
        }
        if(yeol.length < answers.length) {
            yeol.push(yeol[i]);
        }
        if(quokka.length < answers.length) {
            quokka.push(quokka[i]);
        }
    }

    dong = dong.filter((n, i) => n === answers[i]);
    yeol = yeol.filter((n, i) => n === answers[i]);
    quokka = quokka.filter((n, i) => n === answers[i]);

    

    maxpoint.push(Math.max(dong.length, yeol.length, quokka.length));

    if(maxpoint.includes(dong.length) == true) {
        answer.push(1);
    }
    if(maxpoint.includes(yeol.length) == true) {
        answer.push(2);
    }
    if(maxpoint.includes(quokka.length) == true) {
        answer.push(3);
    }

    return answer;
}




// function solution(answers) {
//     const dong = [1, 2, 3, 4, 5];
//     const yeol = [2, 1, 2, 3, 2, 4, 2, 5];
//     const quokka = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//     const answer = [];
//     dong.filter((i, n) => dong[i] === answer[i]);
//     yeol.filter(i => yeol[i] === answer[i]);
//     quokka.filter(i => quokka[i] === answer[i]);

//     const a = dong.length
//     const b = 


//     if()
// }



// function solution(answers) {
//     const answer = [];
//     const dong = [1, 2, 3, 4, 5];
//     const yeol = [2, 1, 2, 3, 2, 4, 2, 5];
//     const quokka = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//     for(i = 0; i < answers.length; i++) {
//         if(dong.length > answers.length) {
//             break;
//         }
//         if(dong.length < answers.length) {
//             dong.push(dong[i]);
//             yeol.push(yeol[i]);
//             quokka.push(quokka[i]);
//         }
//     }

//     dong = dong.filter((n, i) => n === answers[i]);
//     yeol = yeol.filter((n, i) => n === answers[i]);
//     quokka = quokka.filter((n, i) => n === answers[i]);


//     console.log(dong);
//     console.log(yeol);
//     console.log(quokka);

//     answer.push(dong, yeol, quokka);

//     answer.sort((a, b) => b.length - a.length);

//     for(i = 0; i < answer.length; i++) {
//         if(answer[0].length !== answer[1].length) {
//             answer.slice(1, 2)
//         }
//         if(answer[0].length == answer[1].length) {
//             answer.slice(2, 1);
//         }
//         else {
//             break;
//         }
//     }

//     dong = 1;
//     yeol = 2;
//     quokka = 3;

//     return answer;
// }
// solution([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]);





// function solution(answers) {
//     const answer = [];
//     const solve = [];
//     const dong = [1, 2, 3, 4, 5];
//     const yeol = [2, 1, 2, 3, 2, 4, 2, 5];
//     const quokka = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//     for(i = 0; i < answers.length - ; i++) {
//         if(dong.length > answer.length) {
//             break;
//         }
//         if(dong.length < answer.length) {
//             dong.push(dong[i]);
//             yeol.push(yeol[i]);
//             quokka.push(quokka[i]);
//         }
//     }
// }