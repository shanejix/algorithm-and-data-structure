// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

//  

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
// Example 4:

// Input: nums = [0]
// Output: 1
// Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.
//  

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/missing-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：循环排序

// 📝 思路：利用循环排序数组的特征，nums[i] === i

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    // 循环排序
    nums.sort((a, b) => a - b);

    let len = nums.length;

    let missed = len;// [0]

    for (let i = 0; i < len; i++) {
        if (nums[i] !== i) {
            missed = i;
            break;
        }
    }

    return missed
};

// 🎨 方法二：位运算

// 📝 思路：利用异或性质

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    let len = nums.length;

    let missed = len;// [0]

    for (let i = 0; i < len; i++) {
        missed ^= nums[i] ^ i
    }

    return missed
};