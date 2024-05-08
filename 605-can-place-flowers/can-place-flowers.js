/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    count = 0;
    if (n == 0) {
        return true
    }
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1; // Plant a flower at the current position
            count++; // Increment the count of planted flowers
        }
    }
    // Check if the required number of flowers can be planted
    return n <= count;

};