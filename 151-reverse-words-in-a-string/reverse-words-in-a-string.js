/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // split string into array of words
    const words = s.trim().split(/\s+/);

    // reverse the array of words
    const reverseWords = words.reverse();

    // join the words back into string with single space in between
    return reverseWords.join(' ');
};