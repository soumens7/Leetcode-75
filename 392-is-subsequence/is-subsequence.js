/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0; // pointer for s
    let j = 0; // pointer for t
    
    // edge case 
    if (s.length > t.length) {
        return false;
    }
    
    for (j = 0; j < t.length; j++) {
        // checks for identical elements in string t
        if (s[i] === t[j]) {
            i++;
        }
        // checks if i reached to the end of string s
        if (i === s.length) {
            return true
        }
    }
    return i === s.length;
};