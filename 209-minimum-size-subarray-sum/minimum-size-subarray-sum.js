/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

    let left = 0, sum = 0, minLength = Infinity;
    // move right pointer throughout the array
    for (let right = 0; right < nums.length; right++) { 
        sum += nums[right];
        while (sum >= target) { 
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left]; 
            left++; // moving left pointer 
        }
    }
    return minLength === Infinity ? 0 : minLength;

};