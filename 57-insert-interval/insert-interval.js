/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const merged = [];
    let inserted = false

    for (let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];
        // before newInterval
        if (interval[1] < newInterval[0]) {
            merged.push(interval);
        }
        else if (interval[0] > newInterval[1]) {
            // after newInterval
            if (!inserted) {
                merged.push(newInterval);
                inserted = true;
            }
            merged.push(interval);
        }
        else { // overlap
            newInterval[0] = Math.min(interval[0], newInterval[0]);
            newInterval[1] = Math.max(interval[1], newInterval[1]);
        }
    }
    // if newInterval goes at the end
    if(!inserted){
        merged.push(newInterval);
    }
    return merged;
};