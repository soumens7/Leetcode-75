/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    let map = new Map();

    let wordLength = words[0].length; // length of each word in words
    let wordCount = words.length; // no. of word in words

    let slideWindow = wordLength * wordCount; // total length of words

    // mapping 
    for (let word of words) {
        map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
    }
    let leftIndex = 0;
    let rightIndex = slideWindow - 1;
    let result = [];

    const helper = (tempStr) => {
        let visited = new Map();

        for (let i = 0; i < tempStr.length; i += wordLength) {
            let word = tempStr.substring(i, i + wordLength);

            visited.has(word) ? visited.set(word, visited.get(word) + 1) : visited.set(word, 1)
        }
        // comparing map and visited 
        for (let [key, val] of visited) {
            if (map.get(key) != val) return false;
        }
        return true;
    }
    // sliding window
    while (rightIndex < s.length) {
        if (rightIndex - leftIndex + 1 == slideWindow) {
            let tempStr = s.substring(leftIndex, rightIndex + 1)
            if (helper(tempStr)) result.push(leftIndex)

            leftIndex++;
        }
        rightIndex++;
    }
    return result;

};