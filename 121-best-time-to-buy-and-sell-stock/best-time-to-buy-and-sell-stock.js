/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length < 2) {
        return 0;
    }

    let minPrice = Infinity;

    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];

        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
        else {
            // if currentPrice not lower than minPrice this means we can potentially 
            // sell at currentPrice for profit
            const potentialProfit = currentPrice - minPrice;
            // check if potentialProfit is greater than maxProfit found so far, 
            // and update maxProfit accordingly
            if (potentialProfit > maxProfit) {
                maxProfit = potentialProfit;
            }
        }
    }
    return maxProfit;
};