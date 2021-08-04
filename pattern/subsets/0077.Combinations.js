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

    const dfs = (n, deep) => {

        if (target.length === k) {
            ans.push(target);
            return;
        }

        for (let i = deep; i <= n; i++) {
            target.push(i);
            dfs(n, deep + 1);
            target.pop();
        }

    }

    dfs(n, 0)

    return ans;
};