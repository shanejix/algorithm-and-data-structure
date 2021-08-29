// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// It is guaranteed that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

//  

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
//  

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-product-subarray
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：动态规划

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {

  let n = nums.length;

  if (n === 0) {
    return 0
  }

  const dp_max = new Array(n).fill(0);
  const dp_min = new Array(n).fill(0);
  dp_max[0] = nums[0]
  dp_min[0] = nums[0]

  let res = nums[0]
  for (let i = 1; i < n; i++) {
    if (nums[i] < 0) {
      [dp_min[i - 1], dp_max[i - 1]] = [dp_max[i - 1], dp_min[i - 1]];
    }

    dp_max[i] = Math.max(nums[i], dp_max[i - 1] * nums[i]);
    dp_min[i] = Math.min(nums[i], dp_min[i - 1] * nums[i]);

    res = Math.max(res, dp_max[i])
  }

  return res
};