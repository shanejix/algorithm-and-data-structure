// Count the number of prime numbers less than a non-negative number, n.

//  

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0
//  

// Constraints:

// 0 <= n <= 5 * 106

// 方法一：循环

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let count = 0;

    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
};

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}
