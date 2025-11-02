/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {

    if (s.length < t.length) {
        return "";
    }
    // required count for t
    const charCount = new Map();
    for (const ch of t) {
        charCount.set(ch, (charCount.get(ch) || 0) + 1);
    }
    // sliding window over s
    let left = 0, formed = 0;
    const have = new Map();
    const required = charCount.size;
    let minLen = Infinity, minStart = 0;

    // Expand Window
    for (let right = 0; right < s.length; right++) {
        const c = s[right];
        have.set(c, (have.get(c) || 0) + 1);
        // if this char is needed and we have met the required count, increase formed
        if (charCount.has(c) && have.get(c) === charCount.get(c)) formed++;

        // when window covers t, shrink it from left
        while (formed === required) {
            // update best answer
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;

            }
            const d = s[left];
            have.set(d, have.get(d) - 1);
            if (charCount.has(d) && have.get(d) < charCount.get(d)) formed--;
            left++;
        }

    }
    // return result
    return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);
};