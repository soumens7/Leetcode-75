/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let writePtr = 0;

    for (let readPtr = 0; readPtr < chars.length;) {
        let count = 0;
        let start = readPtr;

        // Count the consecutive repeating characters
        while (readPtr < chars.length && chars[readPtr] === chars[start]) {
            count++;
            readPtr++;
        }
        // write the character
        chars[writePtr++] = chars[start];
        // Write the count as separate characters if count > 1
        if (count > 1) {
            for (let c of String(count)) {
                chars[writePtr++] = c;
            }
        }
    }
        return writePtr;
    };