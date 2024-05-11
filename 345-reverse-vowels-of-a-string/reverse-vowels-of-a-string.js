/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    // Convert the string to an array to make modifications easier
    const chars = s.split('');

    // define a set of vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    // Initializing two pointers
    let left = 0;
    let right = s.length - 1;
    // Continue to swap until vowels meet
    while (left < right) {
        // Moving left pointer to next vowel
        while (left < right && !vowels.has(chars[left])) {
            left++;
        }
        // Moving right pointer to next vowel
        while (left < right && !vowels.has(chars[right])) {
            right--;
        }
        // swapping vowels
        [chars[left], chars[right]] = [chars[right], chars[left]];

        // Move the pointers inward
        left++;
        right--;
    }
    // Convert the array back to a string and return it
    return chars.join('');
};