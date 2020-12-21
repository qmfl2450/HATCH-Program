//제 코드는 보시더라도 7. 7-1. 7-2. % 부분은 모두 무시해주세요!
//다 틀린 코드입니다..ㅠ

//지금은 숫자와 연산자를 입력받아 배열에 담고 배열을 그대로 출력하는 코드입니다
//% 부분과 같이 한계가 많아서 숫자와 연산자를 입력 받는 배열 따로 출력을 위한 배열 따로
//만들 예정입니다!

//  display(input 출력 창), input(0~9, 사칙연산 버튼, AC, C, %), 
const display = document.querySelectorAll('.display');
const input = document.querySelectorAll('.input');
//  num_input(0~9 버튼), calculations(사칙연산 버튼)
const num_input = document.querySelectorAll('.num_input');
const calculations = document.querySelectorAll('.calculations');

//1. 숫자와 연산자를 담을 배열 만들기
// 숫자와 연산자를 동시에 담을, 즉 연산할 때 쓸 배열
const temp_arr = [];
// 연산자 입력 전 숫자를 임시적으로 담을 배열
const temp_num = [];

//if 함수가 내가 원하는 조건일 때 실행되는 지 확인하기 위한 변수
let ch = 0;

num_input.forEach(v => {
    v.addEventListener('click', function() {

        //7-2. % 다음 숫자를 눌렀을 때 자동으로 x 연산자 넣기
        if((temp_num[0] > 0 && temp_num[0] < 1) 
            || (temp_arr[temp_arr.length - 1] > 0 && temp_arr[temp_arr.length - 1] < 1)){
            ch++;
            console.log(ch);
            temp_num.push('x');
            temp_num.push(this.textContent);
            for(let i = 0; i < temp_num.length - 1; i++) {
                temp_arr.push(temp_num[i]);
            }
            temp_num.splice(0, temp_num.length - 1);
        } else {

            //1-1. (연산자 입력 전)0~9까지 숫자는 바로 temp_num에 저장
            //      ex) temp_num = [9, 8, 7]
            temp_num.push(this.textContent);

            //2. 0을 누르고 숫자를 누르면 0이 사라져야 한다
            //      ex) 입력 : 011  출력 : 11
            if(temp_num[0] === "0" && temp_num.length > 1) {
                temp_num.shift();
            }
        }
        console.log("temp_num : " + temp_num);
    })
})

calculations.forEach(v => {
    v.addEventListener('click', function() {

        //3. 입력된 값이 없을 때, 연산자를 입력할 경우, 입력과 출력이 되면 안된다
        //      ex) 입력 : +-x 출력 : 
        if(temp_num.length === 0 && temp_arr.length === 0) {
            return 0;
        } else {
            //4. 연산자가 연속으로 있으면 안된다
            //      ex) 입력 : 3 +   출력 : 3+
            //      ex) 입력 : 3 + x 출력 : 3x
            if(temp_num.length === 0){
                temp_arr.push(this.textContent);
                console.log("temp_arr : " + temp_arr);
                temp_arr.splice(temp_arr.length - 2 , 1);
                console.log("temp_arr.splice : " + temp_arr);

            //1-2. 연산자 입력 시 temp_num = [9, 8, 7]을
            //      join을 통해 '987'로 만들고 temp_arr에 저장
            //      ex) 입력 : 987 + 출력 : 987+
            //          temp_num = [], temp_arr = ['987', '+']
            } else {
                temp_arr.push(temp_num.join(''));
                temp_num.length = 0;
                temp_arr.push(this.textContent);
                console.log("temp_num : " + temp_num);
                console.log("temp_arr : " + temp_arr);
            }
        }
    })
})

//5. All Clear 모든 배열 초기화
function allClear() {
    temp_arr.length = 0;
    temp_num.length = 0;
    console.log("AC temp_arr : " + temp_arr);
    console.log("AC temp_num : " + temp_num);
}

//6. clear 백스페이스
function backspace() {
    if(temp_num.length > 0) {
        temp_num.pop();
    } else {
        temp_arr.pop();
    }
}

//7. % 퍼센트
function percent() {
    //7-1. % 퍼센트 또는 연산자 바로 다음 %를 눌렀을 때
    if(temp_num.length === 0 || parseInt(temp_num[0]) < 1) {
        alert('완성되지 않은 수식입니다');
    } else {
        //%를 눌렀을 때 입력한 숫자에 0.01을 곱하고 temp_arr에 담고 출력
        let temp_percent = parseInt(temp_num.join('')) * 0.01;
        console.log(temp_percent);
        temp_num.length = 0;
        temp_num.push(temp_percent);
        console.log("% temp_num : " + temp_num);
    }
}

//1-3. temp_arr에 숫자와 연산자가 들어가기 전에는 temp_num을 출력하고
//      temp_arr에 숫자가 들어간 후에는 두 배열을 더한 값을 보여준다
//      ex) temp_num = [9, 8, 7] -> 입력 : + -> temp_arr = ['987', '+']
//      ex) temp_arr = ['987', '+'] + temp_num = [1, 2]
input.forEach(v => {
    v.addEventListener('click', function(){
        if(temp_arr.length === 0){
            display[0].textContent = temp_num.join('');
        } else {
            display[0].textContent = temp_arr.join('') + temp_num.join('');
        }
    })
})

