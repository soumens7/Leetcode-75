/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {

        //  Left -> Right (top row)
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col])
        }
        top++;

        // top -> bottom (right column)
        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right])
        }
        right--;
        // right -> left (bottom row)
        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col])
            }
            bottom--;
        }
        // bottom -> top (left column)(right -> left center column) 
        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left])
            }
            left++;
        }
    }
    return result;
};