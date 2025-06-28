/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {

    let goal = nums.length - 1;// Initialize 'goal' to the last index of the array
    // Iterate backwards from the second-to-last element down to the first element (index 0)
    for (let i = nums.length - 2; i >= 0; i--) {
        // Check if from the current position 'i', we can reach the current 'goal'
        // 'i + nums[i]' represents the furthest index reachable from 'i'
        if (i + nums[i] >= goal) {
            // We want to find the leftmost possible index from which we can reach the ultimate goal.
            goal = i;
        }
    }
    // After checking all positions, if 'goal' has successfully moved back to index 0,
    // it means we can start from index 0 and reach the last index.
    return goal === 0;
};