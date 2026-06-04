/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    if (n < 10) {
        if (n === 1 || n === 7) {
            return true;
        }
        return false;
    }
    let sum = 0;
    while (n > 0) {
        let sq = n % 10;
        sum += sq ** 2;
        n -= sq;
        n /= 10;
    }
    if (sum === 1) {
        return true;
    }
    return isHappy(sum);
};