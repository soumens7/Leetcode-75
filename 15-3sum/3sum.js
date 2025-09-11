/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let results = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; // skip duplicates for i
        }
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            let sum = nums[left] + nums[i] + nums[right];
            if (sum === 0) {
                results.push([nums[left], nums[i], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
           else if (sum < 0) {
                left++;
            }
            else {
                right--;

            }
        }
    }
    return results;

};