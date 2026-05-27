/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const Tmap = new Map();
    // count every character in t
    for (const char of t) {
        Tmap.set(char, (Tmap.get(char) || 0) + 1);
    }
    // check if t is an anagram of s
    for (const char of s) {
        // if character is not in the map or zero
        // Tmap doesn't have it 
        if (!Tmap.has(char) || Tmap.get(char) === 0) {
            return false;
        }
        // Decrement the count of used character
        Tmap.set(char, Tmap.get(char) - 1);
    }
    return true;
};