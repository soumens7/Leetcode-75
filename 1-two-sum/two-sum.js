/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const Nmap = new Map();

    for (let i = 0; i < nums.length; i++) {
        // calculate complement
        const comp = target - nums[i];
        // check for complement
        if (Nmap.has(comp)) {
            // if exist, return value associated with complement's key as index, index of current number      
            return [Nmap.get(comp), i];
        }
        // if does not exist, add current number and its index
        Nmap.set(nums[i], i);
    }
};