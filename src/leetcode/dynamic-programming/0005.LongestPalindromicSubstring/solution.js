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