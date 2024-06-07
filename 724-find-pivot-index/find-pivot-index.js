/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let n = nums.length;
    // Initialize arrays to store prefix and suffix sums
    const prefixSum = new Array(n).fill(1);
    const suffixSum = new Array(n).fill(1);
    // Calculate prefix sums(This array will store the sum of all elements to the left of the current element.)
    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
    }
    // Calculate suffix sums(This array will store the sum of all elements to the left of the current element.)
    for (let i = n - 2; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + nums[i + 1];
    }

    for (let pivot = 0; pivot < n; pivot++) {
        // condition check pivot Index
        if (prefixSum[pivot] === suffixSum[pivot]) {
            return pivot;
        }
    }
    return -1;

};