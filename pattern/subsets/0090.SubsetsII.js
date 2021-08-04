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

// 📝 思路：https://leetcode-cn.com/problems/subsets-ii/solution/90-zi-ji-iiche-di-li-jie-zi-ji-wen-ti-ru-djmf/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    // 去重需要排序
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

        // 🔥树层去重区别与树枝去重：递归时，若发现没有选择上一个数，且当前数字与上一个数相同，则可以跳过当前生成的子集
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

// 🎨 方法一：回溯 - 优化 - 宁一种实现

// 📝 思路：https://leetcode-cn.com/problems/subsets-ii/solution/90-zi-ji-iiche-di-li-jie-zi-ji-wen-ti-ru-djmf/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let ans = []
    let path = []

    nums.sort((a, b) => a - b);

    function dfs(nums, deep) {

        ans.push(path.slice(0))

        if (deep >= nums.length) {
            return
        }

        for (let i = deep; i < nums.length; i++) {
            if (i > deep && nums[i] === nums[i - 1]) {
                continue
            }
            path.push(nums[i])
            dfs(nums, i + 1)
            path.pop()
        }
    }

    dfs(0, nums)

    return ans
};
