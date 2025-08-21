/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    // Map of Roman numeral symbols to their integer values
    const romanNum = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    }
    let result = 0;
    // Loop through each character of the Roman numeral string
    for (let i = 0; i < s.length; i++) {
        if (i+1 < s.length && romanNum[s[i]] < romanNum[s[i + 1]]) {
            result -= romanNum[s[i]];
        }
        else {
            result += romanNum[s[i]];
        }
    }
    return result;
};