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
// s consist of only digits and English letters.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-palindromic-substring
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：动态规划 - 求回文子串数

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let n = s.length;

    if (n === 0) {
        return 0
    }

    let ans = 0;

    // 定义dp[i][j]的值表示子串[i,j]是否为回文，并初始化 
    const dp = new Array(n).fill(false).map(() => new Array(n).fill(false))

    // 自身是回文字符串
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        ans++
    }

    for (let j = 1; j < n; j++) {

        for (let i = 0; i < j; i++) {
            // 子串 [i,j]
            dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1])

            if (dp[i][j]) {
                ans++
            }
        }
    }

    return ans
};

// 🎨 方法一：动态规划 - 求最长回文子串

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let n = s.length;

    if (n === 0) {
        return ''
    }

    let ans = '';

    // 定义dp[i][j]的值表示子串[i,j]是否为回文，并初始化 
    const dp = new Array(n).fill(false).map(() => new Array(n).fill(false))

    // 自身是回文字符串
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        ans++
    }

    for (let l = 0; j < n; l++) {

        for (let i = 0; i + l < n; i++) {
            let j = i + l

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

    return ans
};