/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
    const result = [];
    let i = 0;
    while (i < words.length) {
        let lineLen = words[i].length;// length of first word
        let j = i + 1;// index of next word
        while (j < words.length && lineLen + 1 + words[j].length <= maxWidth) {// check if adding next word exceeds maxWidth
            lineLen += 1 + words[j].length;// add space and next word length
            j++;// move to next word
        }
        const lineWords = words.slice(i, j);// words for the current line
        let line = '';// current line string
        if (j === words.length || lineWords.length === 1) {
            // Last line or single word: left-justified
            line = lineWords.join(' ') + ' '.repeat(maxWidth - lineLen);// join words with single space and pad with spaces
        } else {
            // Full justification
            let totalSpaces = maxWidth - lineWords.reduce((sum, w) => sum + w.length, 0);// total spaces to distribute
            let gaps = lineWords.length - 1;// number of gaps between words
            let space = Math.floor(totalSpaces / gaps); // minimum space per gap
            let extra = totalSpaces % gaps; // extra spaces to distribute from the left
            for (let k = 0; k < gaps; k++) { // distribute spaces
                line += lineWords[k]; // add word
                line += ' '.repeat(space + (k < extra ? 1 : 0));  // add spaces
            }
            line += lineWords[gaps];  // add last word
        }
        result.push(line);    // add line to result
        i = j; // move to next line
    }
    return result; // return all lines
}