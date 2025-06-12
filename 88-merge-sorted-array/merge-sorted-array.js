/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1; // points to last actual element in nums1
    let p2 = n - 1; // points to last actual element in nums2
    let p = m + n - 1; // points to last available element in merged nums1(where last element will be placed)
    // Comparing elements of two arrays and placing new merged nums1 positions  according to conditon
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] >= nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        }
        else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    // adding remmaining elements of nums2 in nums1[p]
    // If nums2 still has elements, they must be smaller than any remaining elements in nums1
    // (because nums1's remaining elements were already placed or are smaller than current p2) 
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
};