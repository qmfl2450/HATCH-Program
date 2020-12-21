function displayNum(num) {
    const display = document.getElementById("formula");
    display.value = display.value + num;
  }

function displayZero(zero) {
    const display = document.getElementById("formula");
    display.value = display.value + zero;
  }

function displayCal(cal) {
    const display = document.getElementById("formula");
        // if display.value의 마지막 문자가 숫자라면   
        // isNaN(1)===false  isNaN(a)===true  NaN=Not a Number
    if(!isNaN (display.value.charAt(display.value.length-1))){
          display.value = display.value + cal;  
      }
  }

function percent() {
    const display = document.getElementById("formula");
    const displayResult = document.getElementById("result");
    if(!isNaN (display.value.charAt(display.value.length-1))){
        displayResult.value = display.value / 100;
        display.value = '';
      }
  }
   
function reset() {
    const display = document.getElementById("formula");
    display.value = "";
    const displayResult = document.getElementById("result");
    displayResult.value = "0";
  }
   
function del() {
    const display = document.getElementById("formula");
    display.value = display.value.substring(0, display.value.length - 1);
  }
   
function plusMinus() {
    const display = document.getElementById("formula");
    display.value = display.value * -1;
  }