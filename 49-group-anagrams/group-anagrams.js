/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();

    for (let str of strs) {
        let key = str.split('').sort().join();
        if (!map.has(key)) {
            // create key with empty map
            map.set(key, []);
        }
        // skip creation if key exist, push value(str) to key(array)
        map.get(key).push(str);
    }
    // extracts right hand side of map
    return Array.from(map.values());
};