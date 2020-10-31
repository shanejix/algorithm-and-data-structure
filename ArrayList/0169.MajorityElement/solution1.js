// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3

// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */

// fot-each loop
var majorityElement = function (nums) {
  let result = null;
  if (nums && nums.length) {
    const majorityCount = Math.floor(nums.length / 2);
    // key-element val-appears times
    let hash = {};

    nums.forEach((num) => {
      if (hash[num]) {
        hash[num] = hash[num] + 1;
        if (hash[num] > majorityCount) {
          result = num;
        }
      } else {
        hash[num] = 1;
      }
    });
  }

  return result;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// optimization
var majorityElement1 = function (nums) {
  let result = null;
  if (nums && nums.length) {
    const majorityCount = Math.floor(nums.length / 2);
    // key-element val-appears times
    let hash = {};

    nums.forEach((num) => {
      hash[num] = (hash[num] || 0) + 1;

      if (hash[num] > majorityCount) {
        result = num;
      }
    });
  }

  return result;
};

console.log(majorityElement1([3, 2, 3]));
console.log(majorityElement1([2, 2, 1, 1, 1, 2, 2]));
