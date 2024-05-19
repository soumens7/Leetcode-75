/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0; // Initialize left pointer

    // Iterate through the array with the right pointer
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] != 0) {
            // Swap elements at left and right pointers
            [nums[right], nums[left]] = [nums[left], nums[right]];
            //Incrementing left pointer
            left++
        }
    }
    return nums;
};