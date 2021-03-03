// Given a string s, return the longest palindromic substring in s.

//  

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"
//  

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case),

// 方法一：暴力破解

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    if (s.length === 1) return s;

    let max = '';

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let sub = s.slice(i, j);
            if (sub === sub.split('').reverse().join('') && sub.length > max.length) {
                max = sub
            }
        }
    }

    return max;
};

// 方法二：动态规划-回文串的对称性

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0));

    let res = '';

    for (let l = 0; l < s.length; l++) {

        for (let i = 0; i + l < s.length; i++) {
            let j = i + l;
            if (l === 0) {
                dp[i][j] = true;
            } else if (l === 1) {
                dp[i][j] = s[i] === s[j];
            } else {
                dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
            }

            if (dp[i][j] && l + 1 > res.length) {
                res = s.slice(i, i + l + 1)
            }
        }
    }

    return res
};
