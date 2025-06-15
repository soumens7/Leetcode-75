/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // check for empty array
    if (nums.length === 0) {
        return 0;
    }
    // Pointer `k` starts from 2 because the first two elements are always allowed
    let k = 2;
    for (let i = 2; i < nums.length; i++) {
        // Compare the current element with the element k - 2 positions behind
        // This ensures each element appears at most twice
        if (nums[i] !== nums[k - 2]) {
            // If it's different, it's allowed -> place it at position k
            nums[k] = nums[i];
            k++;// Move the write pointer forward
        }
        // If it's the same as nums[k - 2], skip it (more than 2 duplicates)
    }
    // Return the new length of the modified array
    return k;
};