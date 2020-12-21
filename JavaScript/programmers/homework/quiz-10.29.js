// Q. 수박수박수박수박수? _ 답안


function solution(n) {
    const subak = [];
    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) {
            subak.push('수');
        }
        else {
            subak.push('박');
        }
    }
    return subak.join('');
}



// Q. 같은 숫자는 싫어 _ 답안

function solution(arr) {
    const answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i + 1]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}






// Q. 문자열 내 마음대로 정렬하기 _ 답안

function solution(strings, n) {
    strings.sort(function(a, b) {
        const str1 = a.charAt(n);
        const str2 = b.charAt(n);
        if(str1 < str2) {
            return -1;
        }
        if(str1 > str2) {
            return 1;
        }
        if(a < b) {
            return -1;
        }
        if(a > b) {
            return 1;
        }
        if(a === b) {
            return 0;
        }
    })
    return strings;
}





// function solution(strings, n) {
//     function compare(a, b) {
//         const a = strings[i].charAt(n);
//         const b = strings[i + 1].charAt(n);

//         if(a > b) {
//             return -1;
//         }
//         if(a === b) {
//             return 0;
//         }
//         if(a < b) {
//             return 1;
//         }
//     }
// }
// return solution.sort(compare);


// function solution(strings, n) {
//     strings.sort(function(a, b) {
//         const ac = a.charAt(n);
//         const bc = b.charAt(n);
//         if(ac < bc) {
//             return 1;
//         }
//         if(ac > bc) {
//             return -1;
//         }
//         else {
//             return 0;
//         }
//     })
//     return strings;
// }



// function solution(strings, n) {
//     strings.sort(function(a, b) {
//         return a.charAt(n) - b.charAt(n);
//     })
// }


// function solution(strings, n) {
//     strings.sort(function(a, b) {
//         (a.charAt(n)).localecompare(b.charAt(n));
//     })
// }
