/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // convert nums to a set numSet
    const numSet = new Set(nums);
    let longest = 0; // track of length of longest sequence
    for (let n of numSet) {
        // check if current number(n) is start of a sequence
        if (!numSet.has(n - 1)) {
            let current = 1; // track length of current sequence

            // loop to extend current sequence
            while (numSet.has(n + current)) {
                current++;
            }
            longest = Math.max(longest, current);
        }
    }

    return longest;
};