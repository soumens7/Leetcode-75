/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    const pattern_map = new Map();
    const word_map = new Map();

for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const w = words[i];
    // Check pattern -> word mapping
    if (pattern_map.has(p)) {
        if (pattern_map.get(p) !== w) return false;
    } else {
        pattern_map.set(p, w);
    }

    // Check word -> pattern mapping
    if (word_map.has(w)) {
        if (word_map.get(w) !== p) return false;
    } else {
        word_map.set(w, p);
    }
}
return true;
};