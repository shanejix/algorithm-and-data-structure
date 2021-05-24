// There is a strange printer with the following two special properties:

// The printer can only print a sequence of the same character each time.
// At each turn, the printer can print new characters starting from and ending at any place and will cover the original existing characters.
// Given a string s, return the minimum number of turns the printer needed to print it.

//  

// Example 1:

// Input: s = "aaabbb"
// Output: 2
// Explanation: Print "aaa" first and then print "bbb".
// Example 2:

// Input: s = "aba"
// Output: 2
// Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.
//  

// Constraints:

// 1 <= s.length <= 100
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {

    const len = s.length;

    const dp = new Array(len).fill(0).map(() => new Array(len).fill(0))

    for (let i = len - 1; i >= 0; i--) {
        dp[i][i] = 1;

        for (let j = i + 1; j < len; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i][j - 1];
            } else {
                let min = Infinity;
                for (let k = i; k < j; k++) {
                    min = Math.min(min, dp[i][k] + dp[k + 1][j])
                }
                dp[i][j] = min
            }
        }
    }

    return dp[0][len - 1];
};