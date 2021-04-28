// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

//  

// Example 1:

// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5
// Example 2:

// Input: c = 3
// Output: false
// Example 3:

// Input: c = 4
// Output: true
// Example 4:

// Input: c = 2
// Output: true
// Example 5:

// Input: c = 1
// Output: true
//  

// Constraints:

// 0 <= c <= 231 - 1

// 方法一：暴力，求和转化为求差

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {

    for (let a = 0; a ** 2 < c; a++) {
        let b = Math.sqrt(c - a ** 2);

        if (b === parseInt(b)) {
            return true
        }
    }

    return false
};

// 方法二：双指针

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {

    let a = 0;
    let b = Math.floor(Math.sqrt(c));

    while (a <= b) {
        let sum = a ** 2 + b ** 2;

        if (sum < c) {
            a++
        } else if (sum > c) {
            b--;
        } else {
            return true
        }
    }

    return false
};