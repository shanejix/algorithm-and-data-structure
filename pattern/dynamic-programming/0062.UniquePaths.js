// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

//  

// Example 1:


// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down
// Example 3:

// Input: m = 7, n = 3
// Output: 28
// Example 4:

// Input: m = 3, n = 3
// Output: 6
//  

// Constraints:

// 1 <= m, n <= 100
// It's guaranteed that the answer will be less than or equal to 2 * 109.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/unique-paths
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：动态规划 

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    // memo 定义 dp[i][j] 表示下标为 [i,j] 位置的最大路径数
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    // 初始化 第一行
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }

    // 初始化 第一列
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1;
    }

    // 状态转移
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1]
};