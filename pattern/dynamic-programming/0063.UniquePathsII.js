// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and space is marked as 1 and 0 respectively in the grid.

//  

// Example 1:


// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
// Example 2:


// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1
//  

// Constraints:

// m == obstacleGrid.length
// n == obstacleGrid[i].length
// 1 <= m, n <= 100
// obstacleGrid[i][j] is 0 or 1.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/unique-paths-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：动态规划

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let rows = obstacleGrid.length;
    let cols = obstacleGrid[0].length;

    const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0))

    for (let i = 0; i < rows; i++) {
        dp[i][0] = obstacleGrid[i][0] === 1 ? 0 : 1;
    }

    for (let i = 0; i < cols; i++) {
        dp[0][i] = obstacleGrid[0][i] ? 0 : 1
    }

    console.log(dp);

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
    }

    return dp[rows - 1][cols - 1]
};