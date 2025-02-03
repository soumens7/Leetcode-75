/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map(); // hash map to store characters of s
    let left = 0, maxLen = 0;
    
    for(let right = 0; right < s.length; right++){
        if(map.has(s[right]) && (map.get(s[right]) >= left)){ // check for repeating character in map
            left = map.get(s[right]) + 1;
        }
        map.set(s[right], right); //storing string elements in map
        maxLen = Math.max(maxLen, right - left + 1); // check for max unrepeated length in s
    }
    return maxLen; // return max length 
};