/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = []
    for(let i =0; i < arr.length; i++){
        if (fn(arr[i], i)){     // function(arr, index)
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
    // return arr.filter(fn);
    
};