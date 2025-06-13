/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // check for empty array
    if (nums.length === 0) {
        return 0;
    }
    // fast pointer to keep count for unique elements
    let k = 1;
    // slow pointer to interate through entire array 
    for(let i =1; i < nums.length; i++){
        if(nums[i] !== nums[k-1]){ //check for duplicates
            nums[k] = nums[i];
            k++;
        }
    }
    // k  represents the number of unique elements and the new length of the array
    return k;
};