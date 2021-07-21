// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

//  

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
//  

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
//  

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/squares-of-a-sorted-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 方法一：双指针

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {

    let len = nums.length;

    // 右侧指针指向数组最后一个元素
    let last = len - 1
    // 左侧指针指向数组第一个元素
    let first = 0;

    // 用于接收双指针遍历的结果
    const res = new Array(len).fill(0)
    // p 指针用于倒序向前填充res数组
    let p = len - 1


    while (first <= last) {
        if (nums[first] ** 2 < nums[last] ** 2) {
            res[p] = nums[last] ** 2
            last--
            p--
        } else {
            res[p] = nums[first] ** 2
            first++
            p--
        }
    }

    return res
};