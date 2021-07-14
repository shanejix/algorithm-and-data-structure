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

    // dp[i][j] 表示字符串区间 [i,j] 中需要最少的打印次数 
    const dp = new Array(len).fill(0).map(() => new Array(len).fill(0))

    // 从大到小枚举，满足无后效性
    for (let i = len - 1; i >= 0; i--) {
        // 打印一个字符串的次数为 1
        dp[i][i] = 1;

        // 当字符串的长度大于等于 2 时，判断区间两端的字符是否相等 s[i] === s[j]?
        for (let j = i + 1; j < len; j++) {
            if (s[i] === s[j]) {
                // 相等 从 子区间 转移而来
                dp[i][j] = dp[i][j - 1];
            } else {
                // 不相等 从 枚举所有的可能组合，取最优解
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