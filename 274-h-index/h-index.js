/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations.sort((a, b) => a - b); // step 1
    let n = citations.length;
    for (let i = 0; i < n; i++) { // step 2
        let h = n - i; // H-index
        if (citations[i] >= h) return h;
    }
    return 0;
};