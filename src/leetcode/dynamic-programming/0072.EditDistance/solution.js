// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character
//  

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')
//  

// Constraints:

// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.

// 动态规划

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let n = word1.length
    let m = word2.length

    // 有一个字符串为空串的时候
    if (m * n === 0) {
        return m + n
    }

    // 定义dp dp[i][j] : 从s[0,i) 到 s[0,j)的最小操作次数
    const dp = new Array(n + 1).fill(-1).map(() => new Array(m + 1).fill(-1))

    console.log(dp)

    // 初始化边界值 - 行首
    for (let i = 0; i < n + 1; i++) {
        dp[i][0] = i;
    }

    // 初始化边界值 - 列首
    for (let i = 0; i < m + 1; i++) {
        dp[0][i] = i;
    }

    console.log(dp)

    // 状态转移
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {
            // 转化为 dp[i][j] 的可能

            // s[0,i) 到 s[0,j) 先从 s[0,i) 到 s[0,j-1) 再 s[0,j-1) 到 s[0,j) 添加一个元素
            let left = dp[i][j - 1] + 1
            // s[0,i) 到 s[0,j) 先从 s[0,i-1) 到 s[0,j) 再 s[0,i-1) 到 s[0,i) 添加一个元素
            let up = dp[i - 1][j] + 1;
            // s[0,i) 到 s[0,j) 先从 s[0,i-1) 到 s[0,j-1) 
            let left_up = dp[i - 1][j - 1];

            // 此时出最后一个字符外其余部分都已经完成，判断末尾字符是否需要替换
            if (word1[i - 1] !== word2[j - 1]) {
                left_up += 1;
            }

            dp[i][j] = Math.min(left, up, left_up);
        }
    }

    return dp[n][m]
};