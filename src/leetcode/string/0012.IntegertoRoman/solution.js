// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

//  

// Example 1:

// Input: num = 3
// Output: "III"
// Example 2:

// Input: num = 4
// Output: "IV"
// Example 3:

// Input: num = 9
// Output: "IX"
// Example 4:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 5:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
//  

// Constraints:

// 1 <= num <= 3999

// 方法一：无脑直接法

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let arr = [];
    let feed = 1;

    while (num) {
        let tail = num % 10
        num = parseInt(num / 10)

        arr.unshift(tail * feed);
        feed *= 10
    }

    // console.log(arr)
    let ans = '';

    while (arr.length) {
        let tail = arr.pop();

        if (tail > 0 && tail < 10) {
            ans = numToRoman10(tail) + ans
        } else if (tail >= 10 && tail < 100) {
            ans = numToRoman100(tail) + ans
        } else if (tail >= 100 && tail < 1000) {
            ans = numToRoman1000(tail) + ans
        } else if (tail >= 1000 && tail <= 3999) {
            ans = numToRoman3999(tail) + ans
        }
    }

    return ans
};

function numToRoman3999(num) {
    switch (num) {
        case 1000: return 'M'
        case 2000: return 'MM'
        case 3000: return 'MMM'
    }
}

function numToRoman1000(num) {
    switch (num) {
        case 100: return 'C';
        case 200: return 'CC';
        case 300: return 'CCC';
        case 400: return 'CD';
        case 500: return 'D';
        case 600: return 'DC';
        case 700: return 'DCC';
        case 800: return 'DCCC';
        case 900: return 'CM';
    }
}


function numToRoman100(num) {
    switch (num) {
        case 10: return 'X';
        case 20: return 'XX';
        case 30: return 'XXX';
        case 40: return 'XL';
        case 50: return 'L';
        case 60: return 'LX';
        case 70: return 'LXX';
        case 80: return 'LXXX';
        case 90: return 'XC';
    }
}

function numToRoman10(num) {
    switch (num) {
        case 1: return 'I';
        case 2: return 'II';
        case 3: return 'III';
        case 4: return 'IV';
        case 5: return 'V';
        case 6: return 'VI';
        case 7: return 'VII';
        case 8: return 'VIII';
        case 9: return 'IX';
    }
}

// 方法二：贪心

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const valueSymbols = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
    const roman = [];

    for (const [value, symbol] of valueSymbols) {
        while (num >= value) {
            num -= value;
            roman.push(symbol)
        }

        if (num === 0) {
            break;
        }
    }

    return roman.join('');
}


// 方法一：码表 优化

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const thousands = ["", "M", "MM", "MMM"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    const roman = [];
    roman.push(thousands[Math.floor(num / 1000)]);
    roman.push(hundreds[Math.floor(num % 1000 / 100)]);
    roman.push(tens[Math.floor(num % 100 / 10)]);
    roman.push(ones[num % 10]);

    return roman.join('');
};