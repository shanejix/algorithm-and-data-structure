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

// 方法一：动态规划：m*n矩阵

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

// 方法一：动态规划：n*m矩阵

// "babgbag"
// "bag"

// 用例不过，没找到原因

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {

    let m = s.length;
    let n = t.length;

    const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

    for (let col = 0; col <= m; col++) {
        dp[0][col] = 1;
    }

    // console.log(dp);

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= m; col++) {
            if (s[col - 1] === t[row - 1]) {
                dp[row][col] = dp[row - 1][col - 1] + dp[row][col - 1]
            } else {
                dp[row][col] = dp[row][col - 1]
            }
        }
    }

    console.log(dp);

    return dp[n][m];
};

// 方法一：动态规划

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {

    const dp = new int[t.length() + 1][s.length() + 1];

    for (let j = 0; j < s.length() + 1; j++) dp[0][j] = 1;

    for (let i = 1; i < t.length() + 1; i++) {
        for (let j = 1; j < s.length() + 1; j++) {
            if (t.charAt(i - 1) == s.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
            } else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }

    return dp[t.length()][s.length()];
};
