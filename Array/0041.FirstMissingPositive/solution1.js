// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:

// Input: [1,2,0]
// Output: 3

// Example 2:

// Input: [3,4,-1,1]
// Output: 2

// Example 3:

// Input: [7,8,9,11,12]
// Output: 1

// Note:

// Your algorithm should run in O(n) time and uses constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */

// solution1: sort
var firstMissingPositive = function (nums) {
  let result = 1;
  if (nums && nums.length) {
    // increase sort
    const insSorted = nums.sort((a, b) => a - b);

    // for loop
    for (let i = 0; i < nums.length; i++) {
      // skip less than 0
      if (nums[i] <= 0) {
        continue;
      }
      // if missing 1
      if (nums[i] > 1) {
        break;
      }
      // skip continuous number:1,2
      if (nums[i] + 1 === nums[i + 1]) {
        continue;
      }

      // if miss middle number : 1,3
      if (nums[i] + 1 !== nums[i + 1]) {
        result = nums[i] + 1;
        break;
      }
    }
  }

  return result;
};

console.log(firstMissingPositive([1, 2, 0]));
