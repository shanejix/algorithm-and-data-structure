// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

//  

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]
//  

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
//  

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：循环排序

// 📝 思路：利用循环排序数组的特征，nums[i] === i

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let len = nums.length

    // cyclic sort
    for (let i = 0; i < len;) {
        let j = nums[i] - 1;
        if (j < len && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i++
        }
    }

    let missed = [];
    for (let i = 0; i < len; i++) {
        if (nums[i] !== i + 1) {
            ans.push(i + 1)
        }
    }

    return missed
};