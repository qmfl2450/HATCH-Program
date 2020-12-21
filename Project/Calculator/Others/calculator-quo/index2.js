class Calculator {
    constructor(inputArea) { 
        this.inputArea = inputArea
        this.operatorCheck = true
        this.allClear()
    }
    addNumber(number){
        // let a = [];
        // a += number
        this.inputAreaContent += number
        this.operatorCheck = false
    }
    addOperator(operator){
        if (this.operatorCheck) return false
        this.inputAreaContent += operator
        this.operatorCheck = true
    }
    addZero(zero){
        if (this.inputAreaContent[0] === '0'){
            this.inputAreaContent = '0'
            console.log('error')
        }else{
            this.inputAreaContent += zero
        }
    }
    changeOperator(){
        const a = this.inputAreaContent.substring(0, inputArea.value.length-1);
        if(/\d/.test(a) === false) {
            this.inputAreaContent.substring(0, inputArea.value.length-1);
            this.inputArea.value += this.value;
        }

    }

    backKey(){
        this.inputArea.value = this.inputAreaContent.substring(0, inputArea.value.length-1)
        this.inputAreaContent = this.inputArea.value
        this.inputArea.value += '1'
        console.log(this.inputArea.value)
        console.log(this.inputAreaContent)
    }

    updateDisplay() {
        this.inputArea.value = this.inputAreaContent
    }
    allClear(){
        this.inputAreaContent = ''
        this.inputArea.value = 0
        this.operatorCheck = true
    }
    // OperatorPlus(plus){

    // }
}

const buttons = document.querySelectorAll('button')
const inputArea = document.querySelector('input')

const calculator = new Calculator(inputArea)
// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         switch (button.dataset.type) {
//             case 'operator':
//                 if (calculator.addOperator(button.innerText)) {
//                     calculator.updateDisplay()
//                 } 
//                 console.log('operator')
//                 break
//             case 'ac':
//                 calculator.allClear()
//                 console.log('ac')
//                 break
//             case 'equ':
//                 console.log('equals')
//                 break
//             case 'back-key':
//                 console.log('back-key')
//                 break
//             case 'zero':
//                 console.log('zero')
//                 break
//             default:
//                 calculator.addNumber(button.innerText)
//                 calculator.updateDisplay()
//                 console.log('number')
//                 break
//         }
//     })      
// })

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.dataset.type === 'operator') {
            calculator.addOperator(button.innerText)
            calculator.updateDisplay()
            console.log('operator')            
        }else if(button.dataset.type === 'ac'){
            calculator.allClear()
            console.log('AC')
        }else if(button.dataset.type === 'zeroo'){
            calculator.addZero(button.innerText)
            calculator.updateDisplay()
            console.log('zero')
        }else if(button.dataset.type === 'back-key'){
            calculator.changeOperator()
            console.log('back')
        }
        else {
            calculator.addNumber(button.innerText)
            calculator.updateDisplay()
            console.log()
        }
    })
})