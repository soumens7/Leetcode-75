/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// indices = position in array
var twoSum = function (nums, target) {
    // naive approach
    // let n = nums.length;

    // for (let i = 0; i < n; i++) {
    //     for (let j = i + 1; j < n; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }
    // return null;

    const map = new Map();// create a hash map ({number: index}) to store seen numbers 
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement

        if(map.has(complement)){ // if complement exists in map
            return [map.get(complement), i]; // return indices [previous element index, current index]
        } 

        map.set(nums[i], i); // Store number and its index
    }
    return []; // Return an empty array if no solution is found
};