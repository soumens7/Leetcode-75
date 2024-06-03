/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let left = 0; // left pointer to represent window boundaries
    let right = 0; // right pointer to represent window boundaries
    let zeroCount = 0; // to count zeroes
    let maxLength = 0; // maximum consecutive 1s

    for (let right = 0; right < nums.length; right++) {
        // If the current element is 0, increase the zero count
        if (nums[right] === 0) {
            zeroCount++;
        }
        // if zero count exceeds value of k, move the left pointer to right
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }
        // update the maximum length
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};