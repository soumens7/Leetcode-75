/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // Edge case: if array has only one element, that element is the majority
    if (nums.length === 1) {
        return nums[0];
    }
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let count = 1;
    // Start with the first element as a candidate
    let majorityCandidate = nums[0];
    //  Iterate and count consecutive elements
    for (let i = 1; i < n; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
        }
        else{
            // If the current element is different from the previous one,
            // reset count for the new sequence.
            count = 1;
            majorityCandidate = nums[i];
        }
        // Check if current element's count exceeds n/2
        // This check should happen for every element as its count grows
        if (count > n / 2) {
                return nums[i];
            }
    }
    return majorityCandidate;
};