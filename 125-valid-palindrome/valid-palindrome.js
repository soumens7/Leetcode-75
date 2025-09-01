/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleanedStr= s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let left = 0, right = cleanedStr.length-1;

    while(left < right){
        if(cleanedStr[left] !== cleanedStr[right]){
            return false
        }
        left++;
        right--;
    }
    return true;
};