/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let min = Infinity;
    let min2 = Infinity;

    for (const num of nums) {
        if (num <= min) {
            min = num;
        }
        else if (num <= min2) {
            min2 = num;
        } else {
            return true;
        }
    }
    return false;
};