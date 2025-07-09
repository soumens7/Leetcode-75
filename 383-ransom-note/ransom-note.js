/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // Create a frequency map to store character counts from the magazine.
    const magaMap = new Map();

    // 1. Count every character in the magazine.
    for (const char of magazine) {
        magaMap.set(char, (magaMap.get(char) || 0) + 1);
    }

    // 2. Check if the ransom note can be constructed.
    for (const char of ransomNote) {
        // If a character is not in the map or its count is 0,
        // the magazine doesn't have it.
        if (!magaMap.has(char) || magaMap.get(char) === 0) {
            return false;
        }
        
        // Decrement the count for the used character.
        magaMap.set(char, magaMap.get(char) - 1);
    }

    // 3. If the loop completes, the note can be formed.
    return true;
   
};