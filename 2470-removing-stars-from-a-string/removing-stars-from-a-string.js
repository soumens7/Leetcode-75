/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let stack = []; // using a stack to keep track of characters
    // Iterate through each character in string
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            // if character is '*', pop(remove) the last(left) non star character from stack
            stack.pop(); 
        }
        else {
            // push any non star character to stack
            stack.push(s[i]); 
        }
    }
    // convert stack to string
    return stack.join('');
};