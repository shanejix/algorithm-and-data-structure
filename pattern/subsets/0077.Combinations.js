// Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

// You may return the answer in any order.

//  

// Example 1:

// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
// Example 2:

// Input: n = 1, k = 1
// Output: [[1]]
//  

// Constraints:

// 1 <= n <= 20
// 1 <= k <= n

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/combinations
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：回溯递归

// 📝 思路：测试不通过

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const ans = [];

    if (k <= 0 || n < k) {
        return res;
    }

    /**
     * 深度优先遍历
     * @param {*} deep 树层
     * @param {*} target 存储层的抉择
     * @returns 
     */
    const dfs = (deep, target) => {

        // 剪枝：target 长度加上区间 [deep, n] 的长度小于 k，不可能构造出长度为 k 的 target
        if (target.length + (n - deep + 1) < k) {

            return;
        }

        // 记录合法的答案
        if (target.length === k) {
            ans.push(target.slice())
            return;
        }

        // 考虑选择当前位置
        dfs(deep + 1, [...target, deep]);
        // 不考虑选择当前位置
        dfs(deep + 1, [...target]);

    }

    dfs(1, [])

    return ans;
};


// 🎨 方法一：回溯递归 - 另一种

// 📝 思路：有bug

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const ans = [];
    const target = [];

    if (k <= 0 || n < k) {
        return res;
    }

    const dfs = (deep, target) => {

        if (target.length === k) {
            ans.push(target.slice());
            return;
        }

        for (let i = deep; i <= n; i++) {
            target.push(i);
            dfs(deep + 1, target);
            target.pop();
        }

    }

    dfs(1, target)

    return ans;
};