// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

//  

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
//  

// Constraints:

// 1 <= n <= 231 - 1

// 方法一：hash表解决出现环（死循环）问题

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {

    let c = n;
    const set = new Set();

    while (c !== 1) {
        if (!set.has(c)) {
            set.add(c)
        } else {
            return false
        }
        c = squareSum(c)
    }

    return true;

};

function squareSum(n) {
    let sum = 0;

    let newNum = n;
    while (newNum) {
        let last = newNum % 10;
        newNum = parseInt(newNum / 10);
        sum += last ** 2;
    }

    return sum;
}

// 方法二：快慢指针（解决环的问题）

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {

    let slow = squareSum(n);
    let fast = squareSum(squareSum(n));

    while (slow !== 1 && fast !== 1) {
        if (slow === fast) {
            return false;
        }
        slow = squareSum(slow);
        fast = squareSum(squareSum(fast));
    }

    return true;

};

function squareSum(n) {
    let sum = 0;

    let newNum = n;
    while (newNum) {
        let last = newNum % 10;
        newNum = parseInt(newNum / 10);
        sum += last ** 2;
    }

    return sum;
}