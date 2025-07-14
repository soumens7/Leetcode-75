/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // Initialize the answer array with all 1s.
    const answer = Array(nums.length).fill(1);

    // answer[i] will contain the product of all elements to the left of i.
    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] *= left;
        left *= nums[i];
    }

    // answer[i] will contain the product of all elements to the right of i.
    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= right;
        right *= nums[i];
    }

    return answer;
};