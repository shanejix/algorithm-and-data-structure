// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

//  

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
//  

// Constraints:

// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/3sum-closest
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：排序 + 双指针

// 📝 思路：有序数组，利用 i，j，k 三个指针，在 i 确定的情况下，使用 j ， k 双指针 遍历 i 右侧的和，

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)

    let len = nums.length;

    let ans = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < len; i++) {
        // 确定 i 时，遍历其右侧

        // 跳过重复元素
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue
        }

        // 区间左侧指针
        let j = i + 1;
        // 区间右侧指针
        let k = len - 1;

        while (j < k) {
            if (j > i && nums[j] === nums[j - 1]) {
                j++
                continue
            }

            if (j > k) {
                break;
            }

            let sum = nums[i] + nums[j] + nums[k];

            ans = Math.abs(sum - target) < Math.abs(ans - target) ? sum : ans

            if (sum === target) {
                return sum;
            } else if (sum < target) {
                j++
            } else if (sum > target) {
                k--
            }
        }
    }
};