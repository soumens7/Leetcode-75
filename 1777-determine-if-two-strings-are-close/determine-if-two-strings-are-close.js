/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    // early check to length of strings
    if (word1.length !== word2.length) {
        return false;
    }
    const count1 = {};
    const count2 = {};
    // Populate the character count of word1
    for (let char of word1) {
        count1[char] = (count1[char] || 0) + 1;
    }
    // Populate the character count of word2
    for (let char of word2) {
        count2[char] = (count2[char] || 0) + 1;
    }
    // check if they have same characters
    const chars1 = Object.keys(count1);
    const chars2 = Object.keys(count2);

    if(chars1.length !== chars2.length){
        return false;
    }
    for(let char of chars1){
        if(!count2.hasOwnProperty(char)){
            return false; // Character in word1 not in word2
        }
    }
    // Now check if the frequency distribution is the same
    const freq1 = Object.values(count1).sort((a, b) => a - b);
    const freq2 = Object.values(count2).sort((a, b) => a - b);

    for (let i = 0; i < freq1.length; i++) {
        if (freq1[i] !== freq2[i]) return false;  // Different frequency values
    }

    return true;
};