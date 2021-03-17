// Given two strings s and t, return the number of distinct subsequences of s which equals t.

// A string's subsequence is a new string formed from the original string by deleting some (can be none) of the characters without disturbing the remaining characters' relative positions. (i.e., "ACE" is a subsequence of "ABCDE" while "AEC" is not).

// It is guaranteed the answer fits on a 32-bit signed integer.

//  

// Example 1:

// Input: s = "rabbbit", t = "rabbit"
// Output: 3
// Explanation:
// As shown below, there are 3 ways you can generate "rabbit" from S.
// rabbbit
// rabbbit
// rabbbit
// Example 2:

// Input: s = "babgbag", t = "bag"
// Output: 5
// Explanation:
// As shown below, there are 5 ways you can generate "bag" from S.
// babgbag
// babgbag
// babgbag
// babgbag
// babgbag
//  

// Constraints:

// 0 <= s.length, t.length <= 1000
// s and t consist of English letters.

// 方法一：动态规划

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {

    let m = s.length;
    let n = t.length;

    if (m < n) return 0

    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        dp[i][n] = 1;
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (s[i] === t[j]) {
                dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
            } else {
                dp[i][j] = dp[i + 1][j];
            }
        }
    }

    return dp[0][0]

};