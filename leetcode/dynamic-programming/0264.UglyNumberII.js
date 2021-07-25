// Given an integer n, return the nth ugly number.

// Ugly number is a positive number whose prime factors only include 2, 3, and/or 5.

//  

// Example 1:

// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
// Example 2:

// Input: n = 1
// Output: 1
// Explanation: 1 is typically treated as an ugly number.
//  

// Constraints:

// 1 <= n <= 1690

// 方法一 ：动态规划

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    // 定义数组dp，dp[i] 即为 第 i 个丑数
    const dp = new Array(n + 1).fill(0);

    // 1 视为丑数
    dp[1] = 1;


    // 定义三个指针，初始位置都为 1 （dp数组得第一个位置）
    let p2 = 1;
    let p3 = 1;
    let p5 = 1;


    for (let i = 2; i <= n; i++) {
        const nums2 = dp[p2] * 2;
        const nums3 = dp[p3] * 3;
        const nums5 = dp[p5] * 5;

        dp[i] = Math.min(nums2, nums3, nums5);

        if (dp[i] === nums2) {
            p2++;
        }
        if (dp[i] === nums3) {
            p3++;
        }
        if (dp[i] === nums5) {
            p5++;
        }
    }

    return dp[n]
};

