// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

//  

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
// Example 3:

// Input: nums = [0]
// Output: [0]
// Example 4:

// Input: nums = [1]
// Output: [1]
//  

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is 0, 1, or 2.
//  

// Follow up:

// Could you solve this problem without using the library's sort function?
// Could you come up with a one-pass algorithm using only O(1) constant space?


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    if (!nums) {
        return
    }

    let p = 0;
    let f = 0;
    let l = nums.length - 1;

    while (p <= l) {

        if (nums[p] === 2) {
            [nums[l], nums[p]] = [nums[p], nums[l]];
            l--;
            if (nums[p] !== 2 && nums[p] !== 0) {
                p++
            }
        } else {
            if (nums[p] === 0) {
                [nums[f], nums[p]] = [nums[p], nums[f]];
                f++;
            }
            p++;
        }
    }

    return nums;
};