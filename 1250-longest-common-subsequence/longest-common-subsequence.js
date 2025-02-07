/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length, n = text2.length;
    // Initialize DP table
    let dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0)); 

    // Iterate over both strings
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // If characters at (i-1, j-1) match, we extend the LCS by 1.
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
};