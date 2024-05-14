/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;

    // Initialize arrays to store prefix and suffix products
    const prefixProd = new Array(n).fill(1);
    const suffixProd = new Array(n).fill(1);

    // Calculate prefix products(This array will store the product of all elements to the left of the current element.)
    for (let i = 1; i < n; i++) {
        prefixProd[i] = prefixProd[i - 1] * nums[i - 1];
    }
    // Calculate suffix products( This array will store the product of all elements to the right of the current element.)
    for (let i = n - 2; i >= 0; i--) {
        suffixProd[i] = suffixProd[i + 1] * nums[i + 1];
    }

    // Calculate answer array(Product of predix and suffix elements)
    const answer = [];
    for (let i = 0; i < n; i++) {
        answer[i] = prefixProd[i] * suffixProd[i];
    }

    return answer;
};