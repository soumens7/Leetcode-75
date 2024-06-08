/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    // Create sets from the input arrays to remove duplicates
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    // Create answer arrays
    let answer1 = [...set1].filter(x => !set2.has(x));
    let answer2 = [...set2].filter(x => !set1.has(x));

    // Return the result as a nested array
    return [answer1, answer2];
};