/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    //count the occurrences of each value
    const counts = new Map();
    arr.forEach((item) => {
        counts.set(item, (counts.get(item) || 0) + 1);
    });
    //storing count values in an array
    const result = Array.from(counts.values());
    // check for unique values in result array
    const set = new Set();
    for (const value of result) {
        if (set.has(value)) {
            return false; // Found a duplicate value
        }
        set.add(value);
    }
    return true;
};