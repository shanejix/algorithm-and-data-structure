// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

//  

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
//  

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    let leftBorder = getLeftBorder(nums, target);
    let rightBorder = getRightBorder(nums, target);

    // target 在 nums 的右边或者左边
    if (leftBorder == -2 || rightBorder == -2) return [-1, -1];
    // target 在数组范围中，且 nums 中存在target
    if (rightBorder - leftBorder > 1) {
        return [leftBorder + 1, rightBorder - 1];
    }
    // target 在 nums 范围中，且 nums 中不存在target
    return [-1, -1];
};

/**
 * getRightBorder 寻找target的右边界（不包括target）
 * 
 * 同 leetcode 0744，leetcode 0035
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
function getRightBorder(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    // 记录一下rightBorder没有被赋值的情况
    let rightBorder = -2;

    while (left <= right) {
        let mid = left + right >> 1

        if (nums[left] > target) {
            right = mid - 1
        } else {
            left = mid + 1
            // 更新右边界
            rightBorder = left
        }
    }

    return rightBorder
}

/**
 * getLeftBorder 寻找target的左边界（不包括target）
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
function getLeftBorder(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    // 记录一下leftBorder没有被赋值的情况
    let leftBorder = -2;

    while (left <= right) {
        let mid = left + right >> 1

        if (nums[left] >= target) {
            right = mid - 1
            // 更新左边界
            leftBorder = right;
        } else {
            left = mid + 1
        }
    }

    return leftBorder
}