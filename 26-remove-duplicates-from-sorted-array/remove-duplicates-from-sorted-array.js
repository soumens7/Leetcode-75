/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // check for empty array
    if (nums.length === 0) {
        return 0;
    }
    // k is the pointer for the next unique element's position.
    let k = 1;
    // i is the pointer that iterates through the array from the second element
    for(let i =1; i < nums.length; i++){
        if(nums[i] !== nums[k-1]){ //check for duplicates
            nums[k] = nums[i];
            k++;
        }
    }
    // k  represents the number of unique elements and the new length of the array
    return k;
};