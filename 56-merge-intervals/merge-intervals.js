/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return [];

    intervals.sort((a,b) => a[0] - b[0]); // Sort intervals by start time

    let merged = [intervals[0]]; // Initialize merged array

    for (let i =1 ; i< intervals.length; i++){

        let last = merged[merged.length - 1]; // last points to merged[0] 
        let current = intervals[i]; // current interval

        if(current[0] <= last[1]){
            last[1] = Math.max(current[1], last[1]); // modified merged [0] [1] through reference
        }
        else {
            // adding non-overlapping interval
            merged.push(current);
        }
    }
    return merged;
};