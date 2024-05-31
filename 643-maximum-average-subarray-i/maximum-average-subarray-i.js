/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let n = nums.length;
    if (n < k) return 0;

    // sum of first window of array of size k
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let maxSum = sum;
    // sliding the window over the array
    for (let i = k; i < n; i++) {
        sum += nums[i] - nums[i - k];
        // find the maximum sum
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum / k;
};