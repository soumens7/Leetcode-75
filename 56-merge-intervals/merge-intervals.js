/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];
    // intialize prev with first interval from sorted list
    let prev = intervals[0]; 

    // Iterating through intervals
    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i]; 
        // checking overlap and Merging
        if (interval[0] <= prev[1]) { 
            prev[1] = Math.max(prev[1], interval[1]); 
        } else {
            merged.push(prev); 
            // update prev with current interval
            prev = interval; 
        }
    }
    // adding last interval
    merged.push(prev); 
    return merged; 

};