/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ');//line splits the input string s into an array of substrings (words) using a space as the delimiter
    let res = [];

    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i]) {
            res.push(words[i]);//if true added to the end of the res array.
        }
    }
    return res.join(' ');//res array is joined back into a single string with a space ' '
};