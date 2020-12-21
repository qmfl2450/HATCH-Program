'use strict';

// 1. var
// 변수를 어느 위치에 선언하더라도 인정
// {
//     var name = 'ellie';
// }
//     console.log(name);
//     name = 'hello';
// {
//     console.log(name);
// }


// 2. let
// 변수를 선언한 블록 내에서만 인정
// {
//     let name = 'ellie';
//     console.log(name);
//     name = 'hello';
//     console.log(name);
// }

// 3. constants
// 변수값 변경 불가 -> 해커들이 값을 변경할 것을 방지
    const daysInweek = 7;
    const naxNumber = 5;
    console.log(daysInweek);