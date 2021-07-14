// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

//  

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0
//  

// Constraints:

// -231 <= x <= 231 - 1

// 方法一：暴力破解

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x >= 2147483647 || x <= -2147483648) return 0;

    if (x === 0) return 0;

    let res = String(x).split('').reverse().join('');


    let isSymbol = res.includes('-')

    if (isSymbol) {
        res = res.slice(0, res.length - 1);
    }

    let start = 0;
    for (let i = 0; i < res.length; i++) {
        if (res[i] !== '0') {
            start = i;
            break;
        }
    }

    if (start !== -1) {
        return (Number(isSymbol ? '-' + res.slice(start) : res.slice(start)) > 2147483647 || Number(isSymbol ? '-' + res.slice(start) : res.slice(start)) < -2147483647) ? 0 : Number(isSymbol ? '-' + res.slice(start) : res.slice(start));
    }

    return (Number(isSymbol ? '-' + res : res) > 2147483647 || Number(isSymbol ? '-' + res : res) < -2147483647) ? 0 : Number(isSymbol ? '-' + res : res);
};

// 方法一：转字符串 ，优化

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let str = x.toString();
    let newX;

    if (x >= 0) {
        newX = str.split('').reverse().join('');
    }
    if (x < 0) {
        let num = str.substring(1);
        let newNum = num.split('').reverse().join('');
        console.log(newNum, typeof newNum, -newNum)
        newX = - newNum;
    }

    if (newX < Math.pow(-2, 31) || newX >= Math.pow(2, 31) - 1) {
        return 0
    } else {
        return newX;
    }
};



// 方法二：模拟栈 ，弹出和推入数字法

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    let rev = 0;

    while (x !== 0) {
        // if (rev >= Math.pow(2, 31) - 1 || rev < Math.pow(-2, 31)) {
        if (rev > 214748364 || rev < -214748364) {
            return 0;
        }
        let pop = x % 10;
        rev = rev * 10 + pop;
        x = parseInt(x / 10);
    }

    return rev;
};
