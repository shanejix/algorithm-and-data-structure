// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

//  

// Example 1:

// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.
// Example 2:

// Input: nums = [-1,0]
// Output: [-1,0]
// Example 3:

// Input: nums = [0,1]
// Output: [1,0]
//  

// Constraints:

// 2 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each integer in nums will appear twice, only two integers will appear once.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/single-number-iii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：位运算

// 📝 思路：结合了 leetcode 0136 和 leetcode 0137 https://leetcode-cn.com/problems/single-number-iii/solution/dong-hua-tu-jie-yi-ding-neng-hui-by-yuan-gqg8/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {

  let xor = 0;

  // 求出只出现一次数字的异或值
  for (let num of nums) {
    xor ^= num
  }

  // 保留二进制位中最右侧的1,作为分组位
  let group = xor & (-xor)

  let ans = new Array(2).fill(0)
  // 分组异或，求只出现一次数字
  for (let num of nums) {
    // 分组位为0一组
    if ((group & num) === 0) {
      ans[0] ^= num
    } else {
      // 分组位为1一组
      ans[1] ^= num
    }
  }

  return ans
};