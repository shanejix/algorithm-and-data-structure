// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

//  

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
//  

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
//  

// Follow up: Could you minimize the total number of operations done?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let len = nums.length;

    // 左指针指向当前已经处理好的序列的尾部，右指针指向待处理序列的头部
    let prev = last = 0;

    while (last < len) {
        if (nums[last] !== 0) {
            // 每次右指针指向非零数，则将左右指针对应的数交换，同时左指针右移
            [nums[prev], nums[last]] = [nums[last], nums[prev]]
            // 右指针左边直到左指针处均为零
            prev++
        } else {
            // 左指针左边均为非零数
            last++
        }
    }
};