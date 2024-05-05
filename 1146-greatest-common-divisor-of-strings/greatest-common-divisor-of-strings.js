/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {

    const gcdLength = gcd(str1.length, str2.length);
    const substring = str1.substring(0, gcdLength);

    if (isDivisor(substring, str1) && isDivisor(substring, str2)) {
        return substring;
    } else {
        return "";
    }
    // Function to calculate the greatest common divisor (GCD) of two numbers
    function gcd(a, b) {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    // Function to check if a string s is a divisor of string t
    function isDivisor(s, t) {
    const repeats = t.length / s.length;
    return s.repeat(repeats) === t;
}
};