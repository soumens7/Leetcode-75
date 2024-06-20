/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []; // empty stack to store opening bracket
    for (char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); // push it onto stack
        } else { // if char is closing bracket
            if (!stack.length || // if stack is empty 
                (char === ')' && stack[stack.length - 1] !== '(') || // closing bracket should match corresponding opening bracket
                (char === '}' && stack[stack.length - 1] !== '{') ||
                (char === ']' && stack[stack.length - 1] !== '[')) {
                return false; // string is not valid
            }
            stack.pop(); // if invalid found, pop the opening bracket from stack
        }
    }
    return !stack.length; // if stack is empty, all opening brackets are matched with closing brackets, will return true
                         // string will be invalid if unmatches brackets found, will return false 
};