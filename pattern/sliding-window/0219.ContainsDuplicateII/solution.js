// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

//  

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
//  

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105
// 通过次数99,630提交次数234,939

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/contains-duplicate-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 方法一：滑动窗口

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

    // i 窗口右侧位置
    for (let i = 0; i < nums.length; ++i) {
        // j - k 左侧位置
        for (let j = Math.max(i - k, 0); j < i; ++j) {
            if (nums[i] == nums[j]) return true;
        }
    }
    return false;
}
