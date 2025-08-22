/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    // Mapping of Roman numeral symbols to their integer values
    // Ordered from largest to smallest (important for greedy approach)
    const valSymbols = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];

    let romanNum = ''; // Final Roman numeral string to be build

    for (const [val, symbol] of valSymbols) {
        if (num === 0) break;
       // How many times the current Roman symbol can fit into num
        let count = Math.floor(num / val);

        // Append that many symbols to the result string
        // Example: if num = 3000, val = 1000 → 'M'.repeat(3) → 'MMM'
        romanNum += symbol.repeat(count); 

        // Reduce the number by the value just converted
        num -= count * val;
    }
    return romanNum;

};