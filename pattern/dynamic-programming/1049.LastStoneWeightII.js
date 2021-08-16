// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose any two stones and smash them together. Suppose the stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the smallest possible weight of the left stone. If there are no stones left, return 0.

//  

// Example 1:

// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We can combine 2 and 4 to get 2, so the array converts to [2,7,1,8,1] then,
// we can combine 7 and 8 to get 1, so the array converts to [2,1,1,1] then,
// we can combine 2 and 1 to get 1, so the array converts to [1,1,1] then,
// we can combine 1 and 1 to get 0, so the array converts to [1], then that's the optimal value.
// Example 2:

// Input: stones = [31,26,33,21,40]
// Output: 5
// Example 3:

// Input: stones = [1,2]
// Output: 1
//  

// Constraints:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/last-stone-weight-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：动态规划

// 📝 思路：
// 最后一块石头的重量：从一堆石头中,每次拿两块重量分别为x,y的石头,若x=y,则两块石头均粉碎;若x<y,两块石头变为一块重量为y-x的石头求最后剩下石头的最小重量(若没有剩下返回0)
// 问题转化为：把一堆石头分成两堆,求两堆石头重量差最小值
// 进一步分析：要让差值小,两堆石头的重量都要接近sum/2;我们假设两堆分别为A,B,A<sum/2,B>sum/2,若A更接近sum/2,B也相应更接近sum/2
// 进一步转化：将一堆stone放进最大容量为sum/2的背包,求放进去的石头的最大重量MaxWeight,最终答案即为sum-2*MaxWeight;、
// 0/1背包最值问题：外循环stones,内循环target=sum/2倒叙

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    // 求和
    let sum = 0
    for (const weight of stones) {
        sum += weight;
    }

    // 背包容量
    const w = Math.floor(sum / 2);
    // dp[w]表示容量为w的背包能放下东西的最大价值
    const dp = new Array(m + 1).fill(0)

    for (const weight of stones) {
        for (let i = w; i >= weight; i--) {
            dp[i] = Math.max(dp[i], dp[i - weight] + weight);
        }
    }

    return sum - 2 * dp[w]
};

// https://leetcode-cn.com/problems/coin-change/solution/yi-pian-wen-zhang-chi-tou-bei-bao-wen-ti-sq9n/