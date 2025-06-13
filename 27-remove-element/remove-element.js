/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = 0; // slow pointer to keep a counter of non-val 

    for (let i = 0; i < nums.length; i++) { // i is the fast pointer which iterates through the entire array
        if (nums[i] !== val) {
            nums[k] = nums[i]; // copying non-val from nums
            k++;                // k increments for every non-val element in nums
        }
    }
    return k; // k is the new length of the array after removal
};