// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

//  

// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99
//  

// Constraints:

// 1 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each element in nums appears exactly three times except for one element which appears once.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/single-number-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：位运算

// 📝 思路：考虑数字的二进制形式，对于出现三次的数字，各 二进制位 出现的次数都是 3 的倍数 https://leetcode-cn.com/problems/single-number-ii/solution/single-number-ii-mo-ni-san-jin-zhi-fa-by-jin407891/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let res = 0;

  // 32位整型
  for (let i = 0; i < 32; i++) {
    let total = 0;
    for (const num of nums) {
      // num的第i位二进制位
      total += (num >> i & 1)
    }

    // 出现三次数字的第i位二进制位的必然使3的倍数 || 没有出现
    if (total % 3 !== 0) {
      res = res | (1 << i)
    }
  }

  return res
};