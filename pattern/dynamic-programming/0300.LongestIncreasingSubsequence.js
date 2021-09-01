// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

//  

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
//  

// Constraints:

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104
//  

// Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：动态规划

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {

  let n = nums.length;

  if (n === 0) {
    return 0
  }

  // memo 定义 dp[i] 表示 区间 [0,i] 的最长上升子序列
  let dp = new Array(n).fill(1)

  let res = 1
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[i] < nums[j]) {
        dp[j] = Math.max(dp[i] + 1, dp[j])
        res = Math.max(res, dp[j])
      }
    }
  }

  return res
};