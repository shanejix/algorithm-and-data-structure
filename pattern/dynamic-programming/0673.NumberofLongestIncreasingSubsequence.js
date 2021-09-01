// Given an integer array nums, return the number of longest increasing subsequences.

// Notice that the sequence has to be strictly increasing.

//  

// Example 1:

// Input: nums = [1,3,5,4,7]
// Output: 2
// Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
// Example 2:

// Input: nums = [2,2,2,2,2]
// Output: 5
// Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.

//  

// Constraints:

// 1 <= nums.length <= 2000
// -106 <= nums[i] <= 106

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：动态规划

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {

  let n = nums.length

  if (n === 0) {
    return 0
  }

  // 定义 dp[i] 表示以第 i 个数字结束的序列的上升子序列的最长长度
  let dp = new Array(n).fill(1);
  // 定义 count[i] 表示以 i 个数字结尾的序列的最长上升子序列的数量
  let count = new Array(n).fill(1);

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[i] < nums[j]) {
        if (dp[i] + 1 > dp[j]) {
          dp[j] = dp[i] + 1;
          count[j] = count[i]
        } else if (dp[i] + 1 === dp[j]) {
          count[j] += count[i]
        }
      }
    }
  }

  let maxLength = 0;
  for (let item of dp) {
    maxLength = Math.max(maxLength, item)
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    if (maxLength === dp[i]) {
      res += count[i]
    }
  }

  return res
};