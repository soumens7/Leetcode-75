/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let n = nums.length;
    // Calculate total sum of array
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
//  Initialize leftSum to keep track of the sum of elements to the left of the current index
let leftSum = 0;
// Iterate through the array to find the pivot index
for (let i = 0; i < n; i++) {
    // Check if the current index is the pivot index
    // leftSum is the sum of elements to the left of index i
    // totalSum - leftSum - nums[i] is the sum of elements to the right of index i
    if (leftSum === totalSum - leftSum - nums[i]) {
        return i;
    }
    // Update leftSum to include the current element
    leftSum += nums[i]
}
return -1;
};