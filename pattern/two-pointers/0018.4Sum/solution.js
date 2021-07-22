// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

//  

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
//  

// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/4sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 🎨 方法一：双指针

// 📝 思路：类似三数之和


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {

    nums.sort((a, b) => a - b)

    let len = nums.length;

    let ans = [];

    for (let i = 0; i < len; i++) {

        let j = i + 1;

        if (nums[j] === nums[j - 1]) {
            j++
            continue
        }

        let k = j + 1;
        let l = len - 1

        while (k < l) {
            if (k > j + 1 && k < len && nums[k] === nums[k - 1]) {
                k++
                continue
            }
            if (k > l) {
                break;
            }

            let sum = nums[i] + nums[j] + nums[k] + nums[l];

            if (sum === target) {
                ans.push([nums[i], nums[j], nums[k], nums[l]])
            } else if (sum < target) {
                k++
            } else if (sum > target) {
                l--
            }
        }
    }
    return ans
};