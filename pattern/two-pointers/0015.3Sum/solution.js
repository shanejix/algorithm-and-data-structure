// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

//  

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []
//  

// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/3sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 🎨 方法一：排序 + 双指针

// 📝 思路：


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let len = nums.length;
    let ans = [];

    nums = nums.sort((a, b) => a - b)

    // 固定 i , 用两个指针 j , k 分别从 i+1 和 len-1 向中间移动
    for (let i = 0; i < len; i++) {

        // 跳过相同的数字
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        // 固定 i 时候，待遍历区间左侧下标
        let j = i + 1;
        // 固定 i 时候，待遍历区间右侧下标
        let k = len - 1

        while (j < k) {
            // 跳过相同的数字
            while (j > i + 1 && j < len && nums[j] === nums[j - 1]) {
                j++
            }

            if (j >= k) {
                break
            }

            let sum = nums[i] + nums[j] + nums[k]

            if (sum === 0) {
                ans.push([nums[i], nums[j], nums[k]])
                j++
            } else if (sum > 0) {
                k--
            } else if (sum < 0) {
                j++
            }
        }
    }
    return ans
};