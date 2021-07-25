// Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

// The answer is guaranteed to fit in a 32-bit integer.

//  

// Example 1:

// Input: nums = [1,2,3], target = 4
// Output: 7
// Explanation:
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.
// Example 2:

// Input: nums = [9], target = 3
// Output: 0
//  

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 1000
// All the elements of nums are unique.
// 1 <= target <= 1000
//  

// Follow up: What if negative numbers are allowed in the given array? How does it change the problem? What limitation we need to add to the question to allow negative numbers?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {

    // 定义 dp[x] 表示选取的元素之和等于 x 的方案数
    const dp = new Array(target + 1).fill(0);

    // 初始化边界，只有当不选取任何元素时，元素之和才为 0，因此只有 1 种方案
    dp[0] = 1;

    // 当 1 ≤ i ≤ target 时 
    for (let i = 1; i <= target; i++) {

        for (const num of nums) {
            // 如果存在一个排列，其中的元素之和等于 i，并且该排列的最后一个元素是 num
            // 则一定有 num ≤ i
            if (num <= i) {
                // 对于元素之和等于 i−num 的每一种排列，在最后添加 num 之后即可得到一个元素之和等于 i 的排列
                // 因此在计算 dp[i] 时，应该计算所有的 dp[i−num] 之和
                dp[i] = dp[i] + dp[i - num]
            }
        }

    }

    return dp[target];
};