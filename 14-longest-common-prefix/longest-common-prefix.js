/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if(!strs.length) return "";

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        for (let j = 1; j < strs.length; j++) { // to compare all strings to first string
            if (strs[j][i] !== char) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
};