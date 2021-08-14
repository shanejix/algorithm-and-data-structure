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

// 🎨 方法一：递归

// 📝 思路：枚举

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // 组合硬币的数量
    let res = Infinity

    coins.sort((a, b) => b - a);

    if (coins.length === 0) {
        return -1
    }

    /**
     * 获取最小数量
     * @param {*} coins 
     * @param {*} rest 
     * @param {*} count 
     * @returns 
     */
    const getMinCoinCount = (coins, rest, count) => {
        // 递归终止的条件
        if (rest < 0) {
            return
        }

        if (rest === 0) {
            res = Math.min(res, count)
        }

        // 枚举
        for (let coin of coins) {
            getMinCoinCount(coins, rest - coin, count + 1)
        }


    }

    getMinCoinCount(coins, amount, 0);

    // 没有任意的硬币组合能组成总金额，则返回 -1
    return res === Infinity ? -1 : res
};

// 🎨 方法三：回溯

// 📝 思路：枚举

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // 组合硬币的数量
    let res = Infinity

    coins.sort((a, b) => b - a);

    if (coins.length === 0) {
        return -1
    }

    const getMinCoinCountOfValue = (coins, total, index) => {

        if (index === coins.length) {
            return Infinity
        }

        let minResult = Infinity
        let currValue = coins[index]
        let maxCount = Math.floor(total / currValue)

        for (let count = maxCount; count >= 0; count--) {
            let rest = total - count * currValue

            if (rest === 0) {
                minResult = Math.min(minResult, count)
            }

            let restCount = getMinCoinCountOfValue(coins, rest, index + 1)

            if (restCount === Infinity) {
                if (count === 0) {
                    break
                }
                continue
            }

            minResult = Math.min(minResult, count + restCount)
        }

        return minResult
    }

    const getMinCoinCount = (coins, amount, index) => {
        // 递归终止的条件
        if (index === coins.length) {
            // getMinCoinCountOfValue() 对重新排序后的coins求最小硬币数量
            res = Math.min(res, getMinCoinCountOfValue(coins, amount, 0))
        }

        for (let i = index; i < coins.length; i++) {
            // swap
            [coins[index], coins[i]] = [coins[i], coins[index]]
            // 做出选择
            res = Math.min(res, getMinCoinCount(coins, amount, index + 1))
            // 回溯 撤销选择
            [coins[index], coins[i]] = [coins[i], coins[index]]
        }

    }

    getMinCoinCount(coins, amount, 0);

    // 没有任意的硬币组合能组成总金额，则返回 -1
    return res === Infinity ? -1 : res
};