// 크레인 인형뽑기 게임


// function solution(board, moves) {
//     const burket = [];
//     for(i = 0; i < moves.length; i++) {
//         for(j = 0; j < board.length; j++) {
//             if(moves[i] === j + 1) {
//                 burket.push(board[j][board[j].length - 1]);
//                 board[j].splice(board[j].length - 1, 1);
//                 break;
//             }
//         }
//     }
//     return burket;
// }


// function solution(board, moves) {
//     const burket = [];
//     for(let i = 0; i < moves.length; i++) {
//         for(let j = 0; j < board[0].length; j++) {
//             if((moves[i] === j + 1) && (board[board.length - 1][j] !== 0)) {
//                 burket.push(board[board.length - 1].splice(j, 1, 0).join());
//                 break;
//             }
//         }
//     }
//     return burket;
// }
// console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],	[1,5,3,5,1,2,1,4]));



function solution(board, moves) {
    const burket = [];
    for(let i = 0; i < moves.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            for(let k = 0; k < board.length; k++) {
                if((moves[i] === j + 1) && (board[board.length - k][j] !== 0)) {
                    burket.push(board[board.length - k].splice(j, 1, 0).join());
                    break;
                }
            }
        }
    }
    return burket;
}
console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],	[1,5,3,5,1,2,1,4]));




// function solution (board) {
//     const cols = [];
//     const rows = [];

//     for(let j = 0; j < board[board.length - 1].length; j++) {
//         for(let i = 0; i < board.length; i++) {
//             cols.push(board[i][j]);
//         }
//         rows.push(cols);
//     }
//     console.log(rows);
// }
// solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]);