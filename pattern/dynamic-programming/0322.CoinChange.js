// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

//  

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
// Example 4:

// Input: coins = [1], amount = 1
// Output: 1
// Example 5:

// Input: coins = [1], amount = 2
// Output: 2
//  

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/coin-change
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：贪心算法

// 📝 思路：贪心得到局部最后，但肯能不是整体最优，因此存在用例不过

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

    let rest = amount
    let count = 0;

    coins.sort((a, b) => b - a);

    // 从大到小遍历面值
    for (let coin of coins) {
        // 计算当前面值能用多少个
        let currCount = Math.floor(rest / coin)
        // 累加当前面额使用数量
        count += currCount;
        // 使用当前面值后更新剩余面值
        rest -= coin * currCount

        if (rest === 0) {
            return count
        }

    }

    return -1

};