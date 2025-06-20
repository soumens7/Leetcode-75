/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    if(n === 1 || n === 0){
        return;
    }

    k = k % n;

    if(k === 0){
        return;
    }
    const rotatedNums = new Array(n);
    // Place elements nums[i] into rotatedNums[(i + k) % n](k place)
    for(let i =0; i< n; i++){
        rotatedNums[(i + k) % n] = nums[i];
    }
    // Copy back to original array
    for (let i = 0; i< n; i++){
        nums[i] = rotatedNums[i];
    }
};