

let dong = "25/6+1-5";


function Calcu(dong){
  let word = [];
  const stack = [];
  const result = [];
  let temp = '';


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


  for(let i = 0; i < dong.length; i++){
  
    if(isNaN(dong[i])){
      // stack에 아무것도 담기지 않은 상태라면 temp에 저장되어 있는 숫자를 담아줌
      if(stack.length === 0){
        stack.push(temp);
        temp = '';
        word.push(dong[i]);
        
      }else{
        stack.push(temp);
        temp = '';
        for(let h = 0; h < word.length; h++){
          stack.push(word[h]);
        }
        word = [];
        
        while(isNaN(stack[stack.length - 1])){
          const last = stack.pop();
         
          if(lineCheck(last) < lineCheck(dong[i])){
            word.push(dong[i]);
            word.push(last);
            
          }else{
            stack.push(last);
            if(word.length === 0){
              word.push(dong[i]);
            }
           
            break;
          }
        }
      }
    }



    else{
      temp += dong[i];
      if(dong[i + 1] === undefined){
        
        stack.push(temp);
        for(let h = 0; h < word.length; h++){
          stack.push(word[h]);
        }
      }
    }
  }

  
  console.log(stack);
 

  function help(a, b, c){
    a = +a;
    b = +b;
    switch(c){
      case '+' :
        console.log(1);
        return a + b;
      case '-' :
        console.log(2);
        return a - b;
      case '/' :
        console.log(3);
        return a / b;
      case '*' :
        console.log(4);
        return a * b;
    }
  }
  
  for(let k = 0; k < stack.length; k ++){
    if(isNaN(stack[k])){
      console.log(stack[k],'실행됨');
      const b = result.pop();
      const a = result.pop();
      const calResult = help(a, b, stack[k]);
      console.log(a);
      console.log(b);
      console.log(calResult);
      result.push(calResult);
    }else{
      result.push(stack[k]);
      console.log(result)
    }
  }
  return result.join('');
}

console.log(Calcu(dong));


































  
//   // 식에 있는 각 글자마다 확인함
//   // 숫자가 아닌 연산자일 경우 if문에서 true이기 때문에 진행 됨
//   if(isNaN(dong[i])){
//     if(stack.length === 0){
//       stack.push(temp);
//       stack.push(dong[i]);
//       temp = '';
     
//     }else{
//       while(isNaN(stack[stack.length - 1])){
       
//         // stack에 쌓여 있는 가장 마지막 연산자를 꺼내옴
//         const last = stack.pop();
        
//         if(lineCheck(dong[i]) > lineCheck(last)){
//           word.push(dong[i]);
//           word.push(last);        
//           if(!isNaN(stack[stack.length - 1])){
//             stack.push(temp);
//             temp = '';

//             for(let h = 0; h < word.length; h++){
//               stack.push(word[h]);
//             }
            
//             word = [];
//             break;
//           }
          
          



//         }else{
//           console.log('else문');
//           stack.push(temp);
//           stack.push(last);
//           temp ='';
//           break;
//         }
//       }
    

//       // else구문 끝
//     }
     
     
    
    
    
    
//   // 그냥 숫자가 쓰이고 있을 때는 temp에 임시적으로 저장해 놓고 있음
//   // 연산자가 나올시 변동 될 것임
//   }else{
//     temp += dong[i];
//     if(word.length !== 0){
//       stack.push(temp);
//       temp = '';
//       for(let h = 0; h < word.length; h++){
//         stack.push(word[h]);
//       }
      
//       word = [];
//     }
//   }
  
// }

// console.log(stack);






// if(lineCheck(dong[i]) <= lineCheck(last)){
//   console.log(stack, 'if문');
//   word.push(last);
//   word.push(dong[i]);
//   stack.push(temp);
//   temp = '';
//   for(let i = 0; i < word.length; i++){
//     stack.push(word[i]);
//   }
//   word = [];
//   break;
  
// // 현재의 연산잔가 stack에 있는 연산자보다 우선 순위가 높을 때

// }else{
//   console.log('else문');
//   word.push(dong[i]);
//   word.push(last);
//   stack.push(temp);
//   temp = '';
//   for(let i = 0; i < word.length; i++){
//     stack.push(word[i]);
//   }
//   word = [];
//   break;
  