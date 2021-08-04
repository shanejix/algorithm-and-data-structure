// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

//  

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]
//  

// Constraints:

// 1 <= nums.length <= 6
// -10 <= currNum <= 10
// All the integers of nums are unique.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/permutations
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：回溯递归

// 📝 思路：递归树，用used记录已经选择的num，在叶子节点求得结果 https://leetcode-cn.com/problems/permutations/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-hui-s-mfrp/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const ans = [];
    const target = [];
    const used = [];

    /**
     * 深度优先遍历nums
     * @param {*} nums 
     * @param {*} deep 深度/宽度/层
     * @param {*} used 记录nums中已经选择的num
     */
    const dfs = (nums, deep, used) => {

        if (deep >= nums.length) {
            ans.push(target.slice())
            return;
        }

        // 回溯递归，递归树的递归过程是纵向的，for循环是横向的
        for (let i = 0; i < nums.length; i++) {
            const currNum = nums[i];

            if (used[currNum]) {
                continue
            }

            used[currNum] = true;
            target.push(currNum);

            dfs(nums, deep + 1, used);

            used[currNum] = false;
            target.pop();
        }
    }

    dfs(nums, 0, used);

    return ans
};