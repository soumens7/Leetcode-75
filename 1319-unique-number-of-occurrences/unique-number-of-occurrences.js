/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // count the occurrence of each value
    const counts = new Map();
    for(const item of arr){
        counts.set(item, (counts.get(item) || 0) + 1); // will not include count of duplicate values
    }

    // Use a set to check for unique counts
    const uniqueCounts = new Set();
    for (const count of counts.values()){
        if(uniqueCounts.has(count)){
            return false;
        }
        uniqueCounts.add(count);
    }
    return true;
};