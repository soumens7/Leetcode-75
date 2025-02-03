/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// indices = position in array
var twoSum = function (nums, target) {
    const map = new Map();// create a hash map ({number: index}) to store seen numbers 
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement

        if(map.has(complement)){ // if complement exists in map
            return [map.get(complement), i]; // return indices
        } 

        map.set(nums[i], i); // Store number and its index
    }
    return []; // Return an empty array if no solution is found
};