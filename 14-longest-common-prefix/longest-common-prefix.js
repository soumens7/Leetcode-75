/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if(!strs.length) return "";

    for (let i = 0; i < strs[0].length; i++) {//Scan each char position i of the first string
        let char = strs[0][i];
        for (let j = 1; j < strs.length; j++) { //Compare this char with all other strings at pos i
            if (strs[j][i] !== char) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
};