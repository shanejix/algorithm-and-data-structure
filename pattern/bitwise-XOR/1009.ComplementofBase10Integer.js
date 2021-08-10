// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer n, return its complement.

//  

// Example 1:

// Input: n = 5
// Output: 2
// Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.
// Example 2:

// Input: n = 7
// Output: 0
// Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.
// Example 3:

// Input: n = 10
// Output: 5
// Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.
//  

// Constraints:

// 0 <= n < 109
//  

// Note: This question is the same as 476: https://leetcode.com/problems/number-complement/

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/complement-of-base-10-integer
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：位运算

// 📝 思路：按位异或再取反

/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {

    if (n === 0) {
        return 1
    }

    // 0xFFFFFFFF 即全为 0 补码存的！
    let mask = ~0;

    //  num : 00001101
    while ((mask & n) > 0) {
        // mask : 11111111 -> 11110000
        mask <<= 1
    }

    // ~(11110000 ^ 00001101) => 00000010
    return ~(mask ^ n)

};