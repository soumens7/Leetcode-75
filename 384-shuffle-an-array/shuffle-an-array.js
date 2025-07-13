/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums;
    this.original = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.original;
}
/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    let shuffNums = this.nums.slice();
    // Loop backward from the last element to the first.
    for (let i = shuffNums.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i.
        const j = Math.floor(Math.random() * (i + 1));

        // Swap the elements at indexes i and j.
        [shuffNums[i], shuffNums[j]] = [shuffNums[j], shuffNums[i]];
    }
    return shuffNums;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */