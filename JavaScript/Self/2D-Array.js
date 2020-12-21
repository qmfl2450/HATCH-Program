// (m, n, initial) = ('행', '열', '기본값')
// Array.matrix = function (m, n, initial) {
//     let a, mat = [];
//     for (let i = 0; i < m; i++) {
//         a = [];
//         for (let j = 0; j < n; j++) {
//             a[j] = initial;
//         }
//         mat[i] = a;
//     }
//     return mat;
// };

// const arr = Array.matrix(5, 2, 0);
// console.log(arr);




// const arr1 = Array.from(Array(5), () => new Array(2))
// console.log(arr1);

const arr2 = Array.from(Array(5), () => Array(2).fill(null));
console.log(arr2);