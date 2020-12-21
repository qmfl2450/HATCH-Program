import {odd, even} from './3.3-vars';

function checkOddOrEven(num) {
    if(num % 2) {
        return odd;
    }
    return even;
}

console.log(checkOddOrEven(1));

export default checkOddOrEven;