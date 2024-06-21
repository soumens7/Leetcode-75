/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const stack = [];//Initialization of Stack

    for (const char of s) {
        if (char !== ']') {
            stack.push(char);
            continue;
        }
        // Handling a Closing Bracket ']'
        let cur = stack.pop();
        let str = '';
        while (cur !== '[') {
            str = cur + str;
            cur = stack.pop();
        }
        // Extracting Multipliers
        let num = '';
        cur = stack.pop();
        while (!Number.isNaN(Number(cur))) { //to check if 'cur' can be successfully converted to a number
            num = cur + num;
            cur = stack.pop();
        }
        stack.push(cur);
        // Repeating the String(extracted string str is repeated num times (converted to a number))
        stack.push(str.repeat(Number(num)));
    }
    return stack.join('');
};