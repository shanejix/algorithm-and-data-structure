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

// 🎨 方法二：递归

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

// 🎨 方法三：递归 + 贪心

// 📝 思路：https://leetcode-cn.com/problems/coin-change/solution/322-by-ikaruga/

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

    const getMinCoinCount = (coins, rest, index, count) => {
        // 递归终止的条件
        if (rest < 0) {
            return
        }

        if (rest === 0) {
            res = Math.min(res, count)
        }

        // 贪心 : 用当前存在的最大面值硬币凑出最小硬币数量，凑不起则讲最大硬币数量逐个递减
        for (let i = Math.floor(rest / coins[index]); i >= 0 && i + count < res; i--) {
            getMinCoinCount(coins, rest - i * coins[index], index + 1, count + i)
        }

    }

    getMinCoinCount(coins, amount, 0, 0);

    // 没有任意的硬币组合能组成总金额，则返回 -1
    return res === Infinity ? -1 : res
};

// 🎨 方法三：回溯 二

// 📝 思路：用例没通过

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
     * 从当前组合中求最小硬币数量
     * @param {*} coins 
     * @param {*} total 
     * @param {*} index 
     * @returns 
     */
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

    /**
     * 求所有满足条件的组合
     * @param {*} coins 
     * @param {*} amount 
     * @param {*} index 
     */
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

// 🎨 方法四：递归 + 记忆化搜索

// 📝 思路：枚举存在大量重复，用memo缓存重复计算的值

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // 组合硬币的数量
    let res = Infinity
    // 缓存重复计算的值,memo[total] 表示币值数量为 total 可以换取的最小硬币数量，没有缓存则为 -2
    const memo = new Array(amount + 1).fill(-2);

    // 0 对应的结果为 0
    memo[0] = 0

    coins.sort((a, b) => b - a);

    if (coins.length === 0) {
        return -1
    }

    /**
     * 找到 total 数量零钱可以兑换的最少硬币数量
     * @param {*} coins 
     * @param {*} total 
     * @returns 
     */
    const getMinCoinCount = (coins, total) => {
        // 递归终止的条件
        if (total < 0) {
            return -1
        }

        // 递归终止的条件
        if (total === 0) {
            return 0
        }

        // 先从缓存中查找 memo[total]
        if (memo[total] !== -2) {
            return memo[total]
        }

        let minCount = Infinity

        // 遍历所有面值
        for (let i = 0; i < coins.length; i++) {
            // 如果当前面值大于总额则跳过
            if (coins[i] > total) {
                continue
            }

            // 使用当前面额，并求剩余总额的最小硬币数量
            let restCount = getMinCoinCount(coins, total - coins[i]);

            if (restCount === -1) {
                // 当前选择的coins[i] 组合不成立，跳过
                continue
            }

            // 更新最小总额
            let totalCount = 1 + restCount;
            if (totalCount < minCount) {
                minCount = totalCount
            }
        }

        // 如果没有可用组合，返回 -1
        if (minCount === Infinity) {
            memo[total] = -1;
            return -1
        }

        // 更新缓存
        memo[total] = minCount;
        return minCount

    }

    return getMinCoinCount(coins, amount)
};

// 🎨 方法五：动态规划

// 📝 思路：自底向上，记忆化化搜索

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

    // memo[total] 表示币值数量为 total 可以换取的最小硬币数量，没有缓存则为 -1
    const memo = new Array(amount + 1).fill(-1)
    // 初始化状态
    memo[0] = 0

    // 币值总额状态从 1 到 amount
    for (let v = 1; v <= amount; v++) {
        // 当前币值总额 v 对应的能凑齐最小硬币数量
        let minCount = Infinity;

        // 对当前币值总额 v 枚举所有的 硬币面值
        for (let i = 0; i < coins.length; i++) {
            let currValue = coins[i]

            // 如果当前面值大于币值总额，跳过
            if (currValue > v) {
                continue
            }

            // 使用当前面值，得到剩余币值总额
            let rest = v - currValue
            // 从缓存中取出剩余币值总额对应的最小硬币数量
            let restCount = memo[rest]

            // -1 则表示 组合不成立 跳过
            if (restCount == -1) {
                continue
            }

            // 当前币值组合成立
            let currCount = 1 + restCount;

            // 更新当前币值总额 v 的最小硬币数量
            if (currCount < minCount) {
                minCount = currCount
            }
        }

        // 当前币值总额 v 的最小硬币数量若存在则缓存
        if (minCount !== Infinity) {
            memo[v] = minCount
        }
    }

    return memo[amount]
};