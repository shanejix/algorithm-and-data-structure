// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

//  

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []
//  

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// Each element in nums appears once or twice.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-all-duplicates-in-an-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：循环排序

// 📝 思路：利用循环排序数组的特征，nums[i] === i

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {

    let len = nums.length;

    // cyclic sort
    let i = 0;
    while (i < len) {
        // current number should be index
        let j = nums[i] - 1;
        if (j < len && nums[i] !== nums[j]) {
            // swap
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++
        }
    }

    let duplicate = [];
    for (let i = 0; i < len; i++) {
        if (nums[i] !== i + 1) {
            duplicate.push(nums[i])
        }
    }

    return duplicate
};