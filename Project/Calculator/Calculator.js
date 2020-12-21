const buttons = document.querySelectorAll('.buttons .button button');
const result = document.querySelector('.inputs .now-input input');
const preresult = document.querySelector('.inputs .pre-input input');

// result.value를 위한 배열
let rev = [];
// preresult.value를 위한 배열
let prev = [];

// numbers는 buttons 중에서 '숫자'에 해당하는 값을 저장한 배열
// 전체 버튼이 담긴 변수 buttons 중 for문을 돌려서 textContent가 숫자인 값만 push함 
const numbers = [];
for(let i = 0; i < 11; i++) {
    if(i !== 3) {
        numbers.push(buttons[i].textContent);
    }
}
// operators는 buttons 중에서 '연산자'에 해당하는 값을 저장한 배열
// 전체 버튼이 담긴 변수 buttons 중 for문을 돌려서 textContent가 연산자인 값만 push함
const operators = [];
for(let i = 12; i < 16; i++) {
    operators.push(buttons[i].textContent);
}



buttons.forEach(v => {
    v.addEventListener('click', function() {
        // 'AC'버튼을 누른 경우 모든 값 초기화

        if(v.textContent == 'AC') {
            prev.length = 0;
            rev.length = 0;
            result.value = null;
            preresult.value = null;
            return;
        }

        // '←'버튼을 누른 경우 이전 값이 지워짐
        // '←'버튼을 누른 경우 배열 rev의 마지막 값을 지우고 string으로 변환한 뒤 result.value에 넣음
        // 배열 rev에 값이 없을 경우(result.value가 없을 경우) preresult.value의 마지막 값이 지워지도록 함

        // 11.25 추가 -> preresult.value를 삭제할 때 숫자만 남은 경우, result.value의 값으로 넘어오도록 기능을 추가함
        // prev의 마지막 값이 숫자일 경우, result.value의 값은 prev의 마지막 값으로 할당
        // 배열 rev는 result.value를 split으로 쪼갠 것이며 (이를 위해 rev를 const가 아닌 let으로 수정함), prev를 pop하여 마지막 값을 없애고 다시 preresult.value의 값으로 할당함
        if(v.textContent == '←') {
            if(rev.length !== 0) {
                rev.pop();
                result.value = rev.join('');
                return;
            }
            if(rev.length == 0) {
                if(/\d/.test(prev[prev.length - 1]) === true) {
                    result.value = prev[prev.length - 1];
                    rev = result.value.split('');
                    prev.pop();
                    preresult.value = prev.join('');
                    return;
                } else {
                    prev.pop();
                    preresult.value = prev.join('');
                    return;
                }
            }
        }

        // '='버튼을 누른 경우 이전 값들은 모두 preresult.value에 표기되고,
        // result.value에 '='만 표기됨 (+ 연산 결과값 추가 예정)
        // 입력한 식이 연산자로 끝나는 경우 결과값이 표시되지 않도록 하기 위해 result.value가 null이 아니고, 숫자인 경우로 제한함

        // 11.26 오류 수정 -> preresult.value에 백스페이스 사용 시 preresult.value에 숫자만 남아도 result.value에 숫자가 있는 상태에서 '=' 입력 시 preresult.value로 올라가는 문제가 발생
        // preresult.value의 마지막 값이 연산자가 아닐 경우 result.value에 숫자가 있어도 '='을 입력하지 못하도록 오류를 수정함

        // 11.28 추가 -> 중위표기식을 후위표기식으로 바꾸어주는 함수 적용
        // '='을 누르면 함수가 작동

        // 11.28 추가 -> 후위표기식을 연산하는 함수 적용
        // '='을 누르면 함수가 작동

        // 11.28 수정 -> result.value를 rev에 push하여 백스페이스가 작동될 수 있도록 수정함

        // 11.28 추가 -> 백스페이스로 결과값을 지웠을 경우 다시 '='버튼을 누르면 실행될 수 있도록 기능을 추가함
        // prev의 마지막 값이 피연산자(숫자)이고, result.value에 값이 없을 경우 함수가 실행되도록 함

        // 11.28 추가 -> 결과값이 나온 상태에서 '='을 입력 시 직전 연산자가 되풀이되도록 기능을 추가함
        // result.value에 '='이 있을 경우
        // preresult.value를 초기화하고
        // rev를 split로 쪼갠 다음 rev의 첫 번째와 두 번째 인자값을 삭제함("="과 " ")
        // prev를 [결과값, 직전 연산자, 직전 피연산자] 배열로 다시 저장함
        // rev를 초기화함
        // prev를 join하여 preresult.value에 저장함
        // 연산하는 함수 translation()과 calculate()를 실행하도록 함
        // rev에 result.value를 담음
        if(v.textContent == '=') {
            if((operators.includes(prev[prev.length - 1])) && (/\d/.test(result.value) === true) && (result.value !== null)) {
                prev.push(result.value);
                preresult.value = prev.join('');
                rev.length = 0;
                translation();
                calculate();
                rev.push(result.value);
                return;
            }
            if((operators.includes(prev[prev.length - 1]) === false) && (result.value == "")) {
                translation();
                calculate();
                rev.push(result.value);
                return;
            }
            if(/=/.test(result.value) === true) {
                preresult.value = null;
                rev = rev[0].split('');
                rev.shift();
                rev.shift();
                prev = [rev.join(''), prev[prev.length - 2], prev[prev.length - 1]];
                rev.length = 0;
                preresult.value = prev.join('');
                translation();
                calculate();
                rev.push(result.value);
                return;
            }
            else return;
        }

        // 11.25 '%' 기능 추가
        // '%'버튼을 누른 경우 현재값이 %단위로 변경됨
        // 입력한 값이 없을 경우 '%'버튼을 눌러도 어떠한 변화가 일어나지 않도록 rev에 값이 있을 경우를 조건으로 함
        // 변수 percent를 생성해서 배열 rev를 string으로 변환
        // result.value의 값을 percent 나누기 100으로 줌

        // 11.26 오류 수정 -> '%'된 상태에서 백스페이스(←)를 입력하면 값이 한 번에 삭제되는 오류 발생
        // % 시 rev에 result.value의 값을 통채로 넣었기 때문에 생긴 오류로 판단
        // rev를 rev의 첫 번째 값을 split으로 쪼갠 배열로 재선언 하여 문제를 해결함

        // 11.28 추가 -> 결과값이 나온 이후 '%'를 누른 경우 바로 실행되도록 기능 추가
        // result.value에 '='이 있을 경우, preresult.value와 prev를 초기화함
        // rev의 값을 split로 쪼개서 다시 배열에 담음 -> ex. [= 95] -> ["=", " ", "9", "5"]
        // rev의 첫 번째와 두 번째 인자값을 지움 ("="과 " "(공백))
        // joinrev라는 변수에 rev의 인자값들을 join하여 하나의 값으로 변환함
        // rev를 초기화하고, rev에 joinrev를 담음

        // 11.30 추가 -> % 시 소수점 8자리로 제한함
        // rev를 100으로 나눈 값의 길이가 8자리가 넘을 경우 toFixed(8)로 제한함
        if(v.textContent == '%') {
            if(rev.length !== 0) {
                if(/=/.test(result.value) === true) {
                    preresult.value = null;
                    prev.length = 0;
                    rev = rev[0].split('');
                    rev.shift();
                    rev.shift();
                    let joinrev = rev.join('');
                    rev.length = 0;
                    rev.push(joinrev);
                }
                    result.value = rev.join('') / 100;
                rev.splice(0, 1, result.value);
                rev = rev[0].split('');
                return;
            }
        }

        // 숫자 버튼을 누른 경우 현재 값을 보여주는 input창에 누적됨
        // 배열 rev에 값을 저장한 뒤 string으로 변환하여 result.value에 표기
        // rev[0]이 0일 경우 삭제(가장 먼저 입력한 값이 0일 경우 다른 숫자로 덮어지게 함)

        // 11.28 추가 -> 결과값이 표기된 이후 숫자 버튼을 누른 경우 초기화되고 현재 값만 나오도록 기능을 추가함
        // result.value에 '='이 있을 경우 AC와 같이 모든 값을 초기화함

        // 11.30 수정 -> % 후 숫자 입력시 맨 앞의 0이 사라지는 오류 발견
        // rev[0]이 0일 경우 삭제하는 조건에 rev의 length가 1일 경우를 조건으로 추가함
        if(numbers.includes(v.textContent) === true) {
            if((rev.length == 1) && (rev[0] == 0)) {
                rev.shift();
            }
            if(/=/.test(result.value) === true) {
                prev.length = 0;
                rev.length = 0;
                result.value = null;
                preresult.value = null;
            }
            rev.push(v.textContent);
            result.value = rev.join('');
            return;
        }

        // 연산자가 중복되지 않도록 함
        // 연산자가 입력되는 순간 배열 prev에 저장되기 때문에
        // prev의 마지막 인덱스 값이 현재 입력한 값과 같은 경우 바로 return되도록 함
        // 다를 경우, 배열 rev에 값이 없다면(result.value가 없다면) prev의 마지막 값을 지우고 현재의 값을 넣어서 연산자가 바뀌도록 함
        if((operators.includes(prev[prev.length - 1]) && operators.includes(v.textContent)) === true) {
            if(rev.length == 0) {
                if(prev[prev.length - 1] == v.textContent) {
                    return;
                }
                if(prev[prev.length - 1] !== v.textContent) {
                    prev.splice(prev.length - 1, 1, v.textContent);
                    preresult.value = prev.join('');
                    return;
                }    
            }
        }

        // 연산자 버튼을 가장 먼저 누른 경우 return함
        // 연산자 버튼을 누른 경우 입력창에 있는 값이 위의 칸으로 올라가도록 함
        // rev의 모든 값을 prev에 저장하고, 현재의 값도 prev에 저장
        // 배열 prev의 값을 string으로 변환하여 preresult.value에 표기
        // result.value와 배열 rev를 초기화 (값이 중복으로 담기지 않기 위해)

        // 11.25 추가 -> 최초에 입력한 값은 숫자만 가능하도록 기능을 수정함
        // 연산자일 경우, rev.length 또는 prev.length가 0일 경우 return하도록 함

        // 11.26 추가 -> preresult.value에 백스페이스 사용 시 preresult.value에 숫자만 남아도 result.value에 숫자를 입력할 수 있는 문제가 발생
        // 숫자를 입력할 수 있되, 연산자 입력 시 preresult.value에 올라가기 위해서는 result.value가 숫자이면 안된다는 조건을 걸어 오류를 해결함

        // 11.28 추가 -> 결과값이 나온 이후 연산자를 누른 경우 바로 실행되도록 기능 추가
        // result.value에 '='이 있을 경우, preresult.value와 prev를 초기화함
        // rev의 값을 split로 쪼개서 다시 배열에 담음 -> ex. [= 95] -> ["=", " ", "9", "5"]
        // rev의 첫 번째와 두 번째 인자값을 지움 ("="과 " "(공백))
        // joinrev라는 변수에 rev의 인자값들을 join하여 하나의 값으로 변환함
        // rev를 초기화하고, rev에 joinrev를 담음
        // preresult.value와 prev에 rev의 값과 현재 입력한 연산자를 저장함
        // result.value와 rev를 초기화함

        // 11.30 수정 -> result.value가 없는 상태에서 preresult.value의 값을 백스페이스로 지웠을 때, 연산자가 지워진 경우 연산자를 재입력했을 때 반영이 안되는 오류 발견
        // rev에 값이 없고, prev의 마지막 인자값이 숫자인 경우, 현재 입력값(연산자)이 prev에 담기고 preresult.value에 담길 수 있도록 하여 오류를 수정함

        // 11.30 수정 -> result.value가 0과 같은 수일 경우 모두 0으로 취급하도록 수정함
        // result.value의 값이 0과 같을 경우 prev에 0과 현재 입력값(연산자)를 push해서 preresult.value에 prev를 join하여 넣음
        if(operators.includes(v.textContent) === true) {
            if((rev.length == 0) && (prev.length == 0)) {
                return;
            } else {
                if(/\d/.test(prev[prev.length - 1]) === false) {
                    if(result.value == 0) {
                        prev.push(0);
                        prev.push(v.textContent);
                        preresult.value = prev.join('');
                        result.value = null;
                        rev.length = 0;
                        return;
                    }
                    prev.push(result.value);
                    prev.push(v.textContent);
                    preresult.value = prev.join('');
                    result.value = null;
                    rev.length = 0;
                    return;
                }
                if((rev.length == 0) && (/\d/.test(prev[prev.length - 1]) === true)) {
                    prev.push(v.textContent);
                    preresult.value = prev.join('');
                    return;
                }
                if(/=/.test(result.value) === true) {
                    preresult.value = null;
                    prev.length = 0;
                    rev = rev[0].split('');
                    rev.shift();
                    rev.shift();
                    let joinrev = rev.join('');
                    rev.length = 0;
                    rev.push(joinrev);
                    preresult.value = rev[0] + v.textContent;
                    prev.push(rev[0], v.textContent);
                    result.value = null;
                    rev.length = 0;
                }
            }
        }
    })
})




// 11.28
// 중위표기식을 후위표기식으로 바꾸는 함수
// 배열 postfix는 후위표기식 형태로 전환되어 담길 배열
const postfix = [];
// 배열 stack은 스택
const stack = [];

const plus = document.querySelector('.buttons .operator .plus button').textContent
const minus = document.querySelector('.buttons .operator .minus button').textContent
const multiply = document.querySelector('.buttons .operator .multiply button').textContent
const division = document.querySelector('.buttons .operator .division button').textContent

function translation() {
    // '='을 누르면 모든 식이 배열 prev에 저장되기 때문에 prev의 각 인자값들이 token이 됨
    for(i = 0; i < prev.length; i++) {
        // 현재값이 피연산자(숫자)이면 postfix에 담음
        if(operators.includes(prev[i]) === false) {
            postfix.push(prev[i]);
        }
        // 현재값이 연산자일 경우 우선순위에 따라 적용
        if(operators.includes(prev[i]) === true) {
            // 현재값이 '+' 또는 '-'일 경우 우선순위가 가장 낮기 때문에
            // 스택에 저장된 모든 연산자들을 top부터 순서대로 postfix로 옮김
            if(prev[i] == plus || prev[i] == minus) {
                while(stack.length !== 0) {
                    postfix.push(stack[stack.length - 1]);
                    stack.pop();
                }
                stack.push(prev[i]);
            }
            // 현재값이 '×' 또는 '÷'일 경우
            // 스택의 top이 현재값과 우선순위가 같은 '×' 또는 '÷'이면 postfix로 옮김
            if(prev[i] == multiply || prev[i] == division) {
                while(stack.includes(multiply || division)) {
                    postfix.push(stack[stack.length - 1]);
                    stack.pop();
                }
                // 스택의 top이 현재값보다 우선순위가 낮아졌기 때문에 현재값을 스택에 담음
                stack.push(prev[i])
            }
        }
    }
    // for문으로 모든 token을 돌고 나서
    // 스택에 연산자가 남아있을 경우 top부터 차례대로 postfix로 옮김
    while(stack.length !== 0) {
        postfix.push(stack[stack.length - 1]);
        stack.pop();
    }   
}


// 11.28
// 후위표기식을 연산하는 함수
// 연산한 값을 stack에 넣기 전에 저장할 변수 cal
let cal = 0;

function calculate() {
    // 후위표기식 형태로 담긴 배열 postfix
    for(i = 0; i < postfix.length; i++) {
        // 현재값이 피연산자(숫자)인 경우 스택에 담음
        if(operators.includes(postfix[i]) === false) {
            stack.push(postfix[i]);
        }
        // 현재값이 연산자인 경우
        if(operators.includes(postfix[i]) === true) {
            switch(postfix[i]) {
                // 현재값이 plus인 경우 스택의 가장 마지막에 있는 두 인자값을 더해서 cal에 저장함
                // 해당 값을 스택에서 지움
                // cal을 스택에 담음
                case plus :
                    cal = Number(stack[stack.length - 2]) + Number(stack[stack.length - 1]);
                    stack.pop();
                    stack.pop();
                    stack.push(cal);
                    break;
                // 현재값이 minus인 경우 스택의 가장 마지막에 있는 두 인자값을 빼서 cal에 저장함
                // 해당 값을 스택에서 지움
                // cal을 스택에 담음
                case minus : 
                    cal = Number(stack[stack.length - 2]) - Number(stack[stack.length - 1]);
                    stack.pop();
                    stack.pop();
                    stack.push(cal);
                    break;
                // 현재값이 multiply인 경우 스택의 가장 마지막에 있는 두 인자값을 곱해서 cal에 저장함
                // 해당 값을 스택에서 지움
                // cal을 스택에 담음
                case multiply :
                    cal = stack[stack.length - 2] * stack[stack.length - 1];
                    stack.pop();
                    stack.pop();
                    stack.push(cal);
                    break;
                // 현재값이 division인 경우 스택의 가장 마지막에 있는 두 인자값을 나누어서 cal에 저장함
                // 해당 값을 스택에서 지움
                // cal을 스택에 담음
                case division :
                    cal = stack[stack.length - 2] / stack[stack.length - 1];
                    stack.pop();
                    stack.pop();
                    stack.push(cal);
                    break;
            }
        }
    }
    // 연산된 값의 자리수를 8로 제한함
    // 전체에 toFixed(8)을 줄 경우 자리수가 8이 넘지 않는 값도 '0'이 붙어서 길어짐
    // 그래서 stack[0]이 1보다 작고, stack[0]을 string으로 전환한 값의 길이가 8이 넘을 경우에만 toFixed(8)로 자리수를 제한함
    if(stack[0] < 1 && String(stack[0]).length > 8) {
        result.value = '=' + stack[0].toFixed(8);
        postfix.length = 0;
        stack.length = 0;
        return;
    }
    // result.value에 '= 연산값'을 표기함
    result.value = '= ' + stack[0];
    // 배열 postfix와 stack을 초기화함
    postfix.length = 0;
    stack.length = 0;
}