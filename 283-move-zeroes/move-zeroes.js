/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   let count = 0;
    // first loop will remove all the zeroes
   for (let i =0; i< nums.length; i++){
        if(nums[i] == 0){
            nums.splice(i, 1);
            count++;
            i--;
        }    
   }  
   // Second loop will add all the removed zeroes to end of array
   for (i =0; i< count; i++){
    nums.push(0);
   }
   return nums;
};