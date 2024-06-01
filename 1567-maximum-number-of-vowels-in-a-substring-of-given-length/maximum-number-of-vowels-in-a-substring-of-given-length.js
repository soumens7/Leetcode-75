/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let n = s.length;
    let count = 0;
    let maxCount = 0;
    
    // Initialize the first window
    for(let i = 0; i< k; i++){
        if(vowels.has(s[i])){
            count++;
        }
    }
    maxCount = count;
    // sliding the window
    for(let i =k; i< s.length; i++){
        if(vowels.has(s[i])){
            count++;
        }
        if(vowels.has(s[i-k])){
            count--;
        }
        maxCount = Math.max(count, maxCount);
    }
    return maxCount;
};