// You have a pointer at index 0 in an array of size arrLen. At each step, you can move 1 position to the left, 1 position to the right in the array or stay in the same place  (The pointer should not be placed outside the array at any time).

// Given two integers steps and arrLen, return the number of ways such that your pointer still at index 0 after exactly steps steps.

// Since the answer may be too large, return it modulo 10^9 + 7.

//  

// Example 1:

// Input: steps = 3, arrLen = 2
// Output: 4
// Explanation: There are 4 differents ways to stay at index 0 after 3 steps.
// Right, Left, Stay
// Stay, Right, Left
// Right, Stay, Left
// Stay, Stay, Stay
// Example 2:

// Input: steps = 2, arrLen = 4
// Output: 2
// Explanation: There are 2 differents ways to stay at index 0 after 2 steps
// Right, Left
// Stay, Stay
// Example 3:

// Input: steps = 4, arrLen = 2
// Output: 8
//  

// Constraints:

// 1 <= steps <= 500
// 1 <= arrLen <= 10^6

/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function (steps, arrLen) {
    const MODULO = 1000000007;

    // 指针下标的最大值
    let maxColumn = Math.min(arrLen - 1, steps);

    // 定义 dp[i][j] 表示 在 i 步 操作后，指针位于 下标 j 的 方案数 0 <= i <= steps 0 <= j <= arrLen -1
    const dp = new Array(steps + 1).fill(0).map(() => new Array(maxColumn + 1).fill());

    // 初始化边界：在 0 步 操作后 ，指针下标 位于 0 的方案 为 1 ，保持不动。// dp[0][j]=0  ( 1<= j <= min(arrLen -1,steps) ：
    dp[0][0] = 1;

    // 每一步操作中，指针可以向左或向右移动 1 步，或者停在原地
    // 因此，当 i <= i <= steps 时，状态转移方程为：dp[i][j] = dp[i - 1][j] + p[i - 1][j - 1] + dp[i - 1][j + 1];
    for (let i = 1; i <= steps; i++) {
        for (let j = 0; j <= maxColumn; j++) {
            dp[i][j] = dp[i - 1][j];

            // dp[i][j] 当 j = 0 时，dp[i-1][j-1] = 0 
            if (j - 1 >= 0) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % MODULO;
            }

            // dp[i][j] 当 j = min(arrLen−1,steps) 时，dp[i−1][j+1] = 0
            if (j + 1 <= maxColumn) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % MODULO;
            }
        }
    }
    return dp[steps][0];
};