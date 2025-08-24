/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let n = s.length;

    let count = 0;
    let index = n - 1;

    while(index >= 0 && s[index] === ' ') index--; // skip trailing spaces
    while (index >= 0 && s[index] !== ' ' ) {
        count++;
        index--; 
    }
    return count;
};