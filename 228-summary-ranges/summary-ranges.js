/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    const res = [];
    let i = 0;
    while (i < nums.length) {
        let start = i;
        // check for number consecutive or not
        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++;
        }
        // if "a", a === b
        if (start === i) {
            res.push(nums[start].toString());
        }
        // if "a->b", a != b 
        else {
            res.push(nums[start] + "->" + nums[i]);
        }
        i++; 
    }
    return res;
};