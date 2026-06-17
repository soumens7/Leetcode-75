/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let number = 0;
    let signVal = 1;
    let result = 0;
    let operationStack = [];

    for(let i =0; i< s.length; i++){
        let c = s[i];
        if(!isNaN(parseInt(c))){
            number = number * 10 + parseInt(c);
        } else if (c === '+' || c === '-'){
            result += number * signVal;
            signVal = (c === '-') ? -1 : 1;
            number = 0;
        } else if(c === '('){
            operationStack.push(result);
            operationStack.push(signVal);
            result = 0;
            signVal = 1;
        } else if(c === ')') {
            result += signVal * number;
            result *= operationStack.pop();
            result += operationStack.pop();
            number = 0;
        }
    }
    return result += number * signVal;
};