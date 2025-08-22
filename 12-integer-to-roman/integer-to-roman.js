/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    // Map of Roman numeral symbols to their integer values
    const valSymbols = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];

    let romanNum = ''; // list

    for (const [val, symbol] of valSymbols) {
        if (num === 0) break;
        let count = Math.floor(num / val); // 3759 / 1000 = 3
        romanNum += symbol.repeat(count); //3 * M
        num -= count * val;
    }
    return romanNum;

};