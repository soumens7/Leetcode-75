/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    let rows = Array(numRows).fill("").map(() => ""); // separate strings
    let currentRows = 0;
    let dFlag = false; // direction flag

    for(let c of s){
        rows[currentRows] += c;
         // flip the direction if we reach top or bottom row
        if(currentRows === 0 || currentRows === numRows - 1 ){
            dFlag = !dFlag;
        }
        currentRows += dFlag ? 1 : -1; // move based on flag 
    }
    return rows.join("");
};