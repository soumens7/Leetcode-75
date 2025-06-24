/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0;
    let start = prices[0];

    for (let i = 1; i < prices.length; i++) {
        // if start price less than prices[i], it will keep adding up in max 
        if (start < prices[i]) {
            max += prices[i] - start;
        }
        start = prices[i];
    }

    return max;
};