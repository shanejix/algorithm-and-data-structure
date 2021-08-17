// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

//  

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
//  

// Constraints:

// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105
//  

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-subarray
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：动态规划

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let n = nums.length;

    if (n === 0) {
        return 0
    }

    // 定义 dp[i] 表示以 i 为结束位置的最大最大子数组和
    const dp = new Array(n).fill(Infinity);

    dp[0] = nums[0];

    let res = dp[0];

    // 遍历nums
    for (let i = 1; i < n; i++) {

        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);

        res = Math.max(res, dp[i])
    }

    return res
};