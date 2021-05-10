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
// Given a roman numeral, convert it to an integer.

//  

// Example 1:

// Input: s = "III"
// Output: 3
// Example 2:

// Input: s = "IV"
// Output: 4
// Example 3:

// Input: s = "IX"
// Output: 9
// Example 4:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
//  

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].


// 方法一：直接法

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const roman = s.split('');

    const res = [];

    let flag = false;

    for (let i = 0; i < roman.length - 1; i++) {

        if (
            roman[i] === 'I' && roman[i + 1] === 'V' ||
            roman[i] === 'I' && roman[i + 1] === 'X' ||
            roman[i] === 'X' && roman[i + 1] === 'L' ||
            roman[i] === 'X' && roman[i + 1] === 'C' ||
            roman[i] === 'C' && roman[i + 1] === 'D' ||
            roman[i] === 'C' && roman[i + 1] === 'M'
        ) {
            res.push(roman[i] + roman[i + 1])
            flag = i + 1 === roman.length - 1
            i++
        } else {
            res.push(roman[i])
        }
    }

    if (!flag) {
        res.push(roman[roman.length - 1])
    }

    console.log(res)

    let ans = 0;
    for (let r of res) {
        if (r.length < 2) {
            ans += singleToIntger(r);
        } else {
            ans += doubleToIntger(r);
        }
    }

    return ans
};

function doubleToIntger(roman) {
    switch (roman) {
        case 'IV':
            return 4;
        case 'IX':
            return 9;
        case 'XL':
            return 40;
        case 'XC':
            return 90;
        case 'CD':
            return 400;
        case 'CM':
            return 900;
    }
}

function singleToIntger(roman) {
    switch (roman) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
    }
}


// 方法一：直接法 + 优化

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let sum = 0;
    s = s.split('');

    let preNum = getValue(s[0]);
    for (let i = 1; i < s.length; i++) {
        let num = getValue(s[i]);

        // 小值放在大值的左边，就是做减法，否则为加法
        if (preNum < num) {
            sum -= preNum;
        } else {
            sum += preNum;
        }
        preNum = num;
    }
    sum += preNum;
    return sum;
}


function getValue(ch) {
    switch (ch) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
}
