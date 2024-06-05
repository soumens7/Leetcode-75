/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0; // pointer to slide the window in array
    let right = 0; // pointer to iterate thorugh the array
    let zeroCount = 0; // counter to count zeroes 
    let maxLen = 0; // longest Subarray
    // Using sliding Window approach
    for(let right = 0 ; right< nums.length; right++){
        if(nums[right] === 0){
            zeroCount++;
        }
        // if zeroCount exceeds 1 
        while(zeroCount > 1){
            if(nums[left] === 0){
                zeroCount--;
            }
            left++;
        }
        // getting the Maximum length 
        maxLen = Math.max(maxLen, right-left);
    }
    return maxLen;
};