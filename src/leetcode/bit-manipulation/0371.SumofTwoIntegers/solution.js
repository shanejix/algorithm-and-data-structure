// Given two integers a and b, return the sum of the two integers without using the operators + and -.

//  

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = 2, b = 3
// Output: 5
//  

// Constraints:

// -1000 <= a, b <= 1000

// 方法一：迭代

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {

    while (b) {
        // 进位
        let carry = (a & b) << 1
        // 无进位和
        a = a ^ b
        // 下一次进位 直到 b 为 0 为止
        b = carry
    }

    return a;
};


