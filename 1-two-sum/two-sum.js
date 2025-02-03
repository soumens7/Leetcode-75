/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// indices = position in array
var twoSum = function (nums, target) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null; // Return an empty array if no solution is found
};