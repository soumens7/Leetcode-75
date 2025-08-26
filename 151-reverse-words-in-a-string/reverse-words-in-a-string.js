/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if(!s.length) return "";

    let words = s.trim().split(/\s+/); // trim string and split into words 
    words.reverse(); // reverse the words

    return words.join(' ');// join the words with single space
};