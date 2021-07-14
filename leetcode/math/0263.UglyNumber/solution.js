// Given an integer n, return true if n is an ugly number.

// Ugly number is a positive number whose prime factors only include 2, 3, and/or 5.

//  

// Example 1:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: n = 8
// Output: true
// Explanation: 8 = 2 × 2 × 2
// Example 3:

// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes another prime factor 7.
// Example 4:

// Input: n = 1
// Output: true
// Explanation: 1 is typically treated as an ugly number.
//  

// Constraints:

// -231 <= n <= 231 - 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {

    if (n <= 0) {
        return false;
    }
    const factors = [2, 3, 5];
    for (const factor of factors) {
        while (n % factor === 0) {
            n /= factor;
        }
    }
    return n == 1;

};