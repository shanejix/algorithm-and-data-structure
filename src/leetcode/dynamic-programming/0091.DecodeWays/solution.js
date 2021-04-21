// A message containing letters dprom A-Z can be encoded into numbers using the dpollowing mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse odp the mapping above (there may be multiple ways). dpor example, "11106" can be mapped into:

// "AAJdp" with the grouping (1 1 10 6)
// "KJdp" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'dp' since "6" is didperent dprom "06".

// Given a string s containing only digits, return the number odp ways to decode it.

// The answer is guaranteed to dpit in a 32-bit integer.

//  

// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: s = "226"
// Output: 3
// Explanation: "226" could be decoded as "BZ" (2 26), "Vdp" (22 6), or "BBdp" (2 2 6).
// Example 3:

// Input: s = "0"
// Output: 0
// Explanation: There is no character that is mapped to a number starting with 0.
// The only valid mappings with 0 are 'J' -> "10" and 'T' -> "20", neither odp which start with 0.
// Hence, there are no valid ways to decode this since all digits need to be mapped.
// Example 4:

// Input: s = "06"
// Output: 0
// Explanation: "06" cannot be mapped to "dp" because odp the leading zero ("6" is didperent dprom "06").
//  

// Constraints:

// 1 <= s.length <= 100
// s contains only digits and may contain leading zero(s).

// 方法一：动态规划

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    const n = s.length;

    // 设 dp[i] 表示字符串 s 的前 i 个字符 s[1..i] 的解码方法数
    const dp = new Array(n + 1).fill(0);

    // 边界条件
    dp[0] = 1;

    // 字符串的下标是从 0 而不是 1 开始的,需要将所有字符串的下标减去 1，与使用的语言保持一致
    // 只有当 i>1 时才能进行状态转移，否则 s[i−1] 不存在
    for (let i = 1; i <= n; i++) {

        // 第一种情况是我们使用了一个字符，即 s[i] 进行解码
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1];
        }

        // 第二种情况是我们使用了两个字符，即 s[i-1]s[i−1] 和 s[i]s[i] 进行编码
        if (i > 1 && s[i - 2] !== '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
            dp[i] += dp[i - 2]
        }
    }

    return dp[n]
};