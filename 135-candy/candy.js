/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {

    let n = ratings.length;
    let candies = new Array(n).fill(1); // At least 1 candy in each [1, 1, 1]

    // left to right
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    // right to left
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i+1] + 1);
        }
    }
    // sum of candies
    return candies.reduce((a, b) => a + b, 0);

};