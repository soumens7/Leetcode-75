/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    // Two dummy vectors to mark the row amd columns that need to be set to zero
    const dummyRow = new Array(row).fill(-1);
    const dummyCol = new Array(col).fill(-1);
    // iterate through each element of matrix, and check if it is zero
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] == 0) {
                dummyRow[i] = 0;
                dummyCol[j] = 0;
            }
        }
    }
    // After marking thr rows and columns
    // Iterate through matrix again and check with corresponding row and columns index in dummyRow and dummyCol if its zero and sets current element in matrix to zero
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (dummyRow[i] == 0 || dummyCol[j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
};