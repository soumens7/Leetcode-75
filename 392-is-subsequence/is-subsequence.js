/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0; // pointer for s
    let j = 0; // pointer for t
    
    if (s.length > t.length) {
        return false;
    }
    
    for (j = 0; j < t.length; j++) {
        if (s[i] === t[j]) {
            i++;
        }
        if (i === s.length) {
            return true
        }
    }
    return i === s.length;
};