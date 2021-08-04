// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

//  

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
//  

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/subsets-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：回溯

// 📝 思路：先排序，利用set去重，同 0078.Subsets

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {

    nums.sort((a, b) => a - b);

    const set = new Set();
    const target = [];

    /**
     * 深度优先遍历数组nums
     * @param {*} nums 
     * @param {*} deep 深度/宽度
     * @returns 
     */
    const dfs = (nums, deep) => {
        if (deep >= nums.length) {
            set.add(JSON.stringify([...target]));
            return
        }

        target.push(nums[deep]);
        dfs(nums, deep + 1);

        target.pop();
        dfs(nums, deep + 1);

    }

    dfs(nums, 0);

    const ans = [];
    for (let [_, val] of set.entries()) {
        ans.push(JSON.parse(val));
    }

    return ans

};

// 🎨 方法一：回溯 - 优化

// 📝 思路：先将数组排序；递归时，若发现没有选择上一个数，且当前数字与上一个数相同，则可以跳过当前生成的子集
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {

    nums.sort((a, b) => a - b);

    const ans = [];
    const target = [];

    /**
     * 深度优先遍历数组nums
     * @param {*} nums 
     * @param {*} deep 深度/宽度
     * @param {*} choosePre 是否选择上一个元素
     * @returns 
     */
    const dfs = (nums, deep, choosePre) => {
        if (deep >= nums.length) {
            ans.push(target.slice());
            return
        }

        dfs(nums, deep + 1, false);

        if (!choosePre && nums[deep - 1] === nums[deep]) {
            return
        }

        target.push(nums[deep]);
        dfs(nums, deep + 1, true);
        target.pop();
    }

    dfs(nums, 0, false);

    return ans

};