

const button = document.querySelectorAll('.number-area .numbers button')
const operatorButton = document.querySelectorAll('.operator-area button')

// 현재 적고 있는 곳
const result = document.querySelectorAll('.result-content strong');

//식이 적히는 곳
const resultMap = document.querySelectorAll('.result-content span')[0];

const resultBody = document.querySelectorAll('.result-area')[0];
let checkSystem = 0;
let resetCheck = 0;
result[0].textContent = 0;


// forEach문을 통해서 .operator-area button들에 addEventListener을 넣어줌
button.forEach((v, i) => {

  // button에 AC와 =에 해당하는 index의 button에 각기 다른 이벤트리스너를 넣어 주었음
  if(i === button.length - 3 || i === button.length -1){

    // AC일때, 
    if(i === button.length - 3){
      v.addEventListener('click', function(){
        resultMap.textContent = '';
        result[0].textContent = 0;

        // AC버튼을 한번누르면 증감 시킴
        // 3초 내에 다시 누르지 않으면 다시 값이 0으로 바뀌게 해놓음
        // 이유는 그냥 현재의 값만 지우고 싶은 때는 한번은 누를 수 있고, 연속으로 두번 누르면 reset되게 만들기 위함
        resetCheck++;
        setTimeout (function(){
          resetCheck = 0;
        }, 3000);

        // AC로 한번에 정리하고자 할 때 남아 있는 StackResult를 한번에 지우는 부분
        // AC를 두번 누르면 진행하게 만듬
        if(resetCheck === 2){
          const removeStack = document.getElementsByClassName('result');
          const length = removeStack.length;
          for(let i = 0; i < length; i++){
            resultBody.removeChild(removeStack[0]);
          }
          resetCheck = 0;
        }
        
      })

    // = 일때
    }else{
      v.addEventListener('click', function(){

        // 클릭이 될때 마다, result라는 클래스 이름을 가진, div를 생성함
        // 그 안에 span과 strong을 생성하여 담음
        const stackResult = document.createElement('div');
        stackResult.className = "result";
        const stackspan = document.createElement('span');
        const stackstrong = document.createElement('strong');

        // 계산식을 resultView라는 변수에 담아둠
        const resultView = resultMap.textContent + result[0].textContent;
        

        // span에는 진행되었던 식과 현재 눌려 있는 값들을 저장해줌
        // strong에는 = 이 담기게 만듬
        // stackstrong에는 계산식의 결과값이 담기게 함
        stackspan.textContent = resultView;
        stackstrong.textContent = Calcu(resultView);

        // 불러왔던, result-area에 div(stackResult)를 담고
        // 그 div(stackResult)안에 span과 strong을 담음
        resultBody.append(stackResult);
        stackResult.append(stackspan);
        stackResult.append(stackstrong);

        // 그리고 현재 사용하고 있는 값에 대해서는 빈값과 0을 넣어주어서 초기화 해줌
        resultMap.textContent = '';
        result[0].textContent = 0;
      })
    }
    
  // button중에 숫자일 때
  }else{
    v.addEventListener('click', function(){
      if(checkSystem === 0){

        // 현재 계산창에 있는 result와 resultMap에 각각을 배열화 시키고, 가장 마지막에 있는 배열의 값이 무엇인지 정의 해놓음
        // 클릭 할때 마다
        const check = result[0].textContent.split('');
        const lastword = check[check.length - 1];
        const mapCheck = resultMap.textContent.split('');
        const mapLastword = mapCheck[mapCheck.length -1];
  

        // 식이 적혀져 있는 곳에 값이 존재하고 => resultMap.textContent.length가 0이 아니라면
        // 식이 적혀져 있는 곳에 제일 마지막 배열 값이 연산자가 아닐 경우 => 숫자일 경우에
        // 연산자 부터 입력할 수 있게 끔 만든 if문
        if(resultMap.textContent.length !== 0 && !(mapLastword == '+' || mapLastword == '-' || mapLastword == '*' || mapLastword == '/')){
          result[0].textContent = '연산자부터 입력해주세요!'
  
          setTimeout(function(){
            result[0].textContent = 0;
          }, 1000);
          return;
        }
  

        // 현재 적고 있는 값의 가장 마지막 배열 값이 0이면서, 길이가 1인 경우 => 0만 적혀 있는 경우
        if(lastword == 0 && result[0].textContent.length === 1){
          // 현재 적고 있는 값 자체가 바로 이벤트가 발생한 버튼의 textContent값으로 변동되게 만듬
          // 이유는 처음에 0이라는 값으로 선정해 놓았으므로, 숫자를 누르는 순간 0 -> 누른 숫자로 바뀌게 만들기 위해서
          result[0].textContent = v.textContent;
          return;
        }

        // 나머지 경우는 바로 숫자가 현재 적고 있는 값에 담김
        result[0].textContent += this.textContent;
      }
    })
  }
})



operatorButton.forEach(v => {
  v.addEventListener('click', function(){
    // 클릭이 눌릴 때 마다, span에 있는 textContent를 배열(check)로 만듬
    // 배열(check)에 가장 마지막 값을 lastword로 지정해 놓음
    const check = result[0].textContent.split('');
    const lastword = check[check.length - 1];
    const mapCheck = resultMap.textContent.split('');
    const mapLastword = mapCheck[mapCheck.length -1];


    // 아무것도 적혀있지 않은 상태에서 입력이 되지 않게 만들고, ! 가 입력되었다가 2초 뒤에 사라지게 만듬
    // 조건으로는 현재 적고 있는 값이 0이고, 길이가 1이며, 식이 적히는 곳에 값이 없다는 조건
    if(result[0].textContent.length === 1 && lastword == 0 && resultMap.textContent === null){
      result[0].textContent ='!'
      checkSystem++;
      // function이 몇초 뒤에 실행될지 설정 하는 것
      setTimeout(function(){
        result[0].textContent = '0';
        checkSystem = 0;
      }, 2000)
      return;
    }
    


    
    if(checkSystem === 0){

      // 연산자 중에 가장 마지막 연산자인 backspace가 눌리면 if문에 걸리고 나머지 연산자가 눌릴시에는 모두 else로 빠짐
      if(v == operatorButton[operatorButton.length -1]){


        // backspance가 눌리면 배열(check)의 가장 마지막 값을 pop으로 지우고 나머지 배열에 있는 값을 join으로 string화 시켜줌
        // 조건으로는 현재 적고 있는 곳의 값이 0일 경우에 식이 적히는 곳에 값이 지워지게 만듬
        if(result[0].textContent === '0'){
          mapCheck.pop();
          resultMap.textContent = mapCheck.join('');


        // 나머지 경우에 실행되는 곳(bakcspace)
        }else{
          check.pop();
          result[0].textContent = check.join('');

          // 만약 backspace로 지우다가 현재 적는 곳에 값이 아무것도 남지 않는다면
          // 현재 적는 곳에 0이라는 값을 줌
          if(result[0].textContent.length === 0){
            result[0].textContent = 0;
          }
        }
        



      // backspace가 아닌 나머지 연산자가 눌릴 시 진행되는 else문
      // +, -, *, / 가 실행되는 곳
      }else{


        // 식이 적히는 곳에 가장 마지막 배열 값이 연산자일 경우와 현재 적고 있는 곳의 값이 0인 경우
        // 이럴때 연산자를 누르면 식이 적히는 곳에 제일 마지막 배열값인 연산자가 바뀌게 만듬
        if((mapLastword == '+' || mapLastword == '-' || mapLastword == '*' || mapLastword == '/') && result[0].textContent == 0){
          // 배열에 가장 마지막 값을 pop을 통해서 지운 후
          mapCheck.pop();
          // 현재 눌린 v.textContent값을 마지막에 넣어줌
          mapCheck.push(v.textContent);
          resultMap.textContent = mapCheck.join('');




        }else{
          // 나머지 경우들에 해당되지 않는 모든 것들은 입력 받은 값의 textContent를 원래 값에 넣어줌
          // 연산자와 현재 값이 적혀 있는 곳의 textContent를 더해서 식이 적혀 있는 곳에 값을 할당하고
          // 현재 적고 있는 곳에 값은 0으로 바꿔줌
          resultMap.textContent += result[0].textContent + this.textContent;
          result[0].textContent = 0; 
          
        }
      }
    }
  })
})

// 후위표기법으로 바꾸는 곳 계산되는 곳
function resultValue(){
  // stack : 스택으로 사용할 배열(리스트)를 선언
  let stack = [];
  // convert : 후위표기식으로 변환된 결과를 저장할 배열(리스트)
  let convert = [];
  // temp : 두자릿수 이상의 숫자를 저장할 임시 변수
  let temp = "";

  // prec : 연산자와 괄호의 우선순위를 반환하는 함수
  function prec(op) {
      switch(op) {
          case '(' :
          case ')' :
              return 0;
          case '+' :
          case '-' :
              return 1;
          case '*' :
          case '/' :
              return 2;
      }
      return 999;
  }

  // f : 계산할 괄호가 있는 식
  let f = resultView;
  // f에 공백이 있다면 모두 제거
  f = f.replace(/(\s*)/g,"");

  for(let i=0; i<f.length; i++) {
      const char = f.charAt(i);
      switch(char) {
          case '(' :
              stack.push(char);
              break;
          
          case '+' : 
          case '-' : 
          case '*' : 
          case '/' :
              // 스택이 비어있지 않는경우 현재의 연산자와 top의 우선순위를 비교
              while(stack[stack.length-1]!=null &&
                  (prec(char) <= prec(stack[stack.length-1]))) {
                  // 현재 연산자의 우선순위가 낮거나 같으면 temp에 pop한 값을 저장
                  temp+=stack.pop();
                  // 다음에 연산자가 나오는 경우 temp를 convert에 push 해 줌.
                  if(isNaN(stack[stack.length-1])) {
                      convert.push(temp);
                      temp = ""                    
                  }
              }
              stack.push(char);
              break;
          
          case ')' :
              let returned_op = stack.pop();
              while(returned_op != '(') {
                  temp+=returned_op;
                  returned_op = stack.pop();

                  if(isNaN(stack[stack.length-1])) {
                      convert.push(temp);
                      temp = ""                    
                  }
              }
              break;
          
          default : 
              temp+=char;
              if(isNaN(f.charAt(i+1)) || (i+1 == f.length) ) {
                  convert.push(temp);
                  temp = ""
              }
              break; 
      }
  }

  while(stack.length != 0) {
      convert.push(stack.pop());
  }

  let resultshow = "";
  for(let i in convert) {
    resultshow+=convert[i];
    resultshow+=" "; 
  }
  console.log(f);
  console.log(resultshow);

  // 후위 표기식 계산 시작
  for(let i in convert) {
      // 숫자인 경우 스택에 푸쉬해준다.
      if(!isNaN(convert[i])) {
          stack.push(convert[i]);
      }
      // 숫자가 아닌(연산자인) 경우 스택에서 두 값을 pop한다.
      // 그리고 계산 결과를 다시 stack에 push한다.
      else {
          const b = parseFloat(stack.pop());
          const a = parseFloat(stack.pop());
          switch(convert[i]) {
              case '+':
                  stack.push(a+b);
                  break;
              case '-':
                  stack.push(a-b);
                  break;
              case '*':
                  stack.push(a*b);
                  break;
              case '/':
                  stack.push(a/b);
                  break;
          }
      }
  }

  // 후위 표기식 변환 결과 출력
  let resultshow1 = "";
  for(let i in convert) {
    resultshow1+=convert[i];
    resultshow1+=" "; 
  }
  console.log(f);
  console.log(resultshow1)
  // 최종적으로 stack에 남아있는 값이 결과값이 된다. 
  console.log("Result = " + stack);
  return stack;
}



// 내가 만든 후위 표기법
function Calcu(resultView){
  
  // 후위 표기식을 담을 stack배열
  const stack = [];

  // 계산된 결과 값을 담을 result배열
  const result = [];

  // 표기식으로 바꿀 때 도중에 잠시 값들을 담아 놓을 곳
  let temp = '';
  let word = [];


  // 우선 순위를 반환해 주는 함수
  function lineCheck(something){
    switch(something){
      case '+' :
      case '-' :
        return 1;
      case '*' :
      case '/' :
        return 2;
    }
  }

  // 입력 받은 값의 글자 수만큼 실행되는 for문
  for(let i = 0; i < resultView.length; i++){
  
    // 입력받은 글자가 숫자가 아니라면 실행되는 if문 --- (1)
    if(isNaN(resultView[i])){

      // stack에 아무것도 담기지 않은 상태라면 temp에 저장되어 있는 숫자를 담아줌
      // word 배열에 현재 입력된 연산자를 담아 두는 if문 --- (2)
      if(stack.length === 0){
        stack.push(temp);
        temp = '';
        word.push(resultView[i]);
      
      // stack의 값이 있을 때 실행되는 else문 --- (2)
      // 현재 temp에 담겨 있는 temp를 stack 배열에 담아줌(temp는 초기화 해줌)
      }else{
        stack.push(temp);
        temp = '';

        // word에 담겨 있는 연산자도 stack에 넣어주고 초기화 시켜줌
        for(let h = 0; h < word.length; h++){
          stack.push(word[h]);
        }
        word = [];
        

        // stack에서 마지막 부분이 연산자인 경우 계속해서 실행되는 while문
        // stack 배열에서 제일 마지막 값을 빼내어서 현재의 비교하고자 하는 resultView[i]와 비교 우위를 비교함
        while(isNaN(stack[stack.length - 1])){
          const last = stack.pop();
         
          // 만약 현재 비교하고자 하는 resultView[i]값이 크다면
          // stack에서 빼넣어온 last를 뒤로 이동시키는 작업을 함
          // 그 값들을 순서대로 word에 넣어주는 if문 --- (3)
          if(lineCheck(last) < lineCheck(resultView[i])){
            word.push(resultView[i]);
            word.push(last);
           
          // stack에 담겨 있던 연산자가 더 우선순위가 높거나 같은 경우에는 stack에 다시 담아줌
          // 만약 word배열에 아무 값도 없다면 현재 비교하고자 했던 resultView[i]값을 넣어주고 while문을 정지 시키는 else문 --- (3)
          }else{
            stack.push(last);
            if(word.length === 0){
              word.push(resultView[i]);
            }
            break;
          }

        }
      }
    }


    // 글자가 숫자일 때 실행되는 else문 --- (1)
    else{
      temp += resultView[i];

      // 만약 입력받은 식의 값의 마지막 값이 숫자로 끝나는 경우 temp에 담겨져 있던 숫자를 stack에 담아주고,
      // word에 담겨져 있던 연산자도 담아줌
      if(resultView[i + 1] === undefined){
        stack.push(temp);
        for(let h = 0; h < word.length; h++){
          stack.push(word[h]);
        }
      }
    }
  }

  // 이건 확인 차 있는 것.
  console.log(stack);
 

  // --------------------------------- 후위 표기식 계산 하는 곳 ----------------------------------------------


  // 숫자 두개의 값과 연산자 글자를 받았을 경우 확인해서 값을 반환해 주는 함수
  function help(a, b, c){
    a = +a;
    b = +b;
    switch(c){
      case '+' :
        return a + b;
      case '-' :
        return a - b;
      case '/' :
        return a / b;
      case '*' :
        return a * b;
    }
  }
  

  // stack에 담겨 있는 식을 계산하는 for문
  for(let k = 0; k < stack.length; k ++){

    // 숫자가 아닌 부분의 값을 만나면 계산해주는 함수를 이용하는 if문 --- (1)
    // result안에 담겨 있는 숫자 두개를 꺼내어서 계산하고, 다시 result 배열에 담아줌.
    if(isNaN(stack[k])){
      const b = result.pop();
      const a = result.pop();
      const calResult = help(a, b, stack[k]);
      result.push(calResult);

    // 숫자인 경우에는 result배열에 숫자를 바로 담아주는 else문 --- (1)
    }else{
      result.push(stack[k]);
    }
  }

  // 결국 숫자하나만 result 배열안에 남아 있으므로 이것을 join 함수를 이용하여 반환 해줌.
  return result.join('');
}



