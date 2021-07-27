// Given an unsorted integer array nums, find the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.

//  

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
//  

// Constraints:

// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/first-missing-positive
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：循环排序

// 📝 思路：利用循环排序数组的特征，nums[i] === i

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let len = nums.length

    // cyclic sort
    let i = 0;
    while (i < len) {
        let j = nums[i] - 1

        if (nums[j] !== nums[i]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i++
        }
    }

    let firstMissing = len + 1
    for (let i = 0; i < len; i++) {
        if (nums[i] !== i + 1) {
            firstMissing = i + 1
            break
        }
    }

    return firstMissing
};