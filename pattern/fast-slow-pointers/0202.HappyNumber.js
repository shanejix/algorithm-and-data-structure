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

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/happy-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：hash

// 📝 思路：用set判断是否出现重复元素来判断循环环的首个元素

// 
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {


    let set = new Set();

    while (n !== 1) {

        let c = squareSum(n);

        if (set.has(c)) {
            return false
        }

        set.add(c)

        n = c;
    }

    return true
};

function squareSum(num) {
    let res = 0;

    while (num) {
        let l = num % 10;
        num = parseInt(num / 10);
        res += l ** 2
    }

    return res
}

// 🎨 方法一：快慢指针

// 📝 思路：其实是隐式的链表，可以用快慢指针判断是否成环

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