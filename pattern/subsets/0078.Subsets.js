// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

//  

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
//  

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/subsets
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：回溯递归

// 📝 思路：回溯思想

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    // 用 target 记录选中的结果
    const target = [];
    const ans = [];

    /**
     * 对数组nums深度优先遍历
     * @param {*} current 当前位置
     * @param {*} nums 
     * @returns 
     */
    const dfs = (current, nums) => {

        // 递归结束条件：当深度进入数组nums最大长度（深度）nums.length -1 的下一层 nums.length
        if (current === nums.length) {
            // 记录当前选择的结果
            ans.push(target.slice())
            return;
        }

        // 选中当前层
        target.push(nums[current])
        dfs(current + 1, nums)

        // 不选中当前层
        target.pop();
        dfs(current + 1, nums)

    }

    dfs(0, nums)
    return ans
};


// 🎨 方法二：迭代

// 📝 思路：发现 0/1 序列对应的二进制数正好从 0 到 2^n - 1; 可以枚举 mask in [0, 2^n - 1] 构建所有的子集

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const ans = [];
    const n = nums.length;

    // 生成 0/1 字符串
    for (let mask = 0; mask < (1 << n); ++mask) {
        const t = [];
        for (let i = 0; i < n; ++i) {
            // 对于数组中的每个数，如果 0 / 1 字符串中该数位为 1 则加入子集 反之跳过
            if (mask & (1 << i)) {
                t.push(nums[i]);
            }
        }
        ans.push(t);
    }
    return ans;
};
