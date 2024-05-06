/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    // Find the maximum number of candies among all the kids
    const maxCandies = Math.max(...candies);

    // Initialize an array to store the result
    const result = [];
    // Iterate through the candies array
    for (let i = 0; i < candies.length; i++) {
        
        result.push(candies[i] + extraCandies >= maxCandies)
    }
    return result;
};