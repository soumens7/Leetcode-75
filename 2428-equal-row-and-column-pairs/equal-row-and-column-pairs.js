/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    if (grid[0].length !== grid.length) return 0;

    // create hashes
    let rowHashes = new Map();
    let colHashes = new Map();

    // function to create a hash from array of integers
    function createHash(list) {
        return list.join(',') // creating a string hash of list
    }
    // populate row hashes 
    for (let i = 0; i < grid.length; i++) {
        let rowHash = createHash(grid[i]);
        rowHashes.set(rowHash, (rowHashes.get(rowHash) || 0) + 1);
    }
    // populate col hashes
    for (let j = 0; j < grid.length; j++) {
        let col = [];// create empty array
        for (let i = 0; i < grid.length; i++) {
            col.push(grid[i][j]);
        }
        let colHash = createHash(col);
        colHashes.set(colHash, (colHashes.get(colHash) || 0) + 1);
    }
    // count matching row and column hashes
    let count = 0;
    rowHashes.forEach((value, key) => {
        if (colHashes.has(key)) {
            count += value * colHashes.get(key);
        }
    });
    return count;

};