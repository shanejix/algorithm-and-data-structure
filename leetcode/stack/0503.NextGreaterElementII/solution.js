// Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

// Example 1:
// Input: [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2; 
// The number 2 can't find next greater number; 
// The second 1's next greater number needs to search circularly, which is also 2.
// Note: The length of given array won't exceed 10000.

// 方法一：暴力循环

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    if (!nums) return []

    if (nums.length === 1) return [-1]

    let res = new Array(nums.length).fill(null);

    for (let i = 0; i < nums.length; i++) {

        res[i] = findNextMax(nums, i)

    }

    return res;

};

function findNextMax(nums, i) {

    let max = -Infinity;
    let curr = nums[i];
    let flag = false;

    if (i >= nums.length || i < 0) {
        return -1
    }

    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] !== undefined && nums[j] > curr && nums[j] > max) {
            max = nums[j]
            flag = true;
            break;
        }
    }

    if (flag !== true) {
        for (let j = 0; j < i; j++) {
            if (nums[j] !== undefined && nums[j] > curr && nums[j] > max) {
                max = nums[j];
                flag = true;
                break;
            }
        }
    }

    if (!flag) {
        return -1
    } else {
        return max;
    }
}


// 方法二：单调栈法：

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    const len = nums.length;

    // 初始化为-1，考虑到最大值的下一个最大值是-1
    const res = new Array(len).fill(-1);

    // 维护一个单调不增的数组下标序列，
    // 如果当前值比栈顶元素对应的元素值小则入栈,
    // 大则出栈并且更新出栈元素的下一个最大值为当前元素，直到为空或者小于栈顶小标所对应的元素
    const stack = [];

    // 注意到只遍历一次序列是不够的，例如序列 [2,3,1][2,3,1]，最后单调栈中将剩余 [3,1][3,1]，其中元素 [1][1] 的下一个更大元素还是不知道的
    // 朴素的思想是，将循环数组拉直,相当将前n-1个元素拼接到数组末尾。
    // why？因为最后一个元素就是要从 0 - n-1 遍历找到下一个最大值。
    // 而且，这里用到下标取模的技巧，隐性的遍历了 0 - n-1 个元素 👍
    for (let i = 0; i < len * 2 - 1; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i % len]) {
            res[stack[stack.length - 1]] = nums[i % len];
            stack.pop();
        }
        stack.push(i % len)
    }

    return res
};