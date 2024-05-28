/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let count = 0;
    let left = 0;
    let right = nums.length - 1;
    // Sort the array to use two pointers effectively
    nums.sort((a, b) => a - b);

    while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum === k) {
            count++;
            left++;
            right--;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }
    return count;
};