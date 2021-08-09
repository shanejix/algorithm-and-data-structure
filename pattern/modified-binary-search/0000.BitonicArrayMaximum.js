// Problem statement:

// Given a bitonic array find the maximum value of the array. An array is said to be bitonic if it has an increasing sequence of integers followed immediately by a decreasing sequence of integers.

// Example:

// Input:
// 1 4 8 3 2

// Output:
// 8
// Solution:

// Definitely the brute force solution even works in linear time where you just pick each element and compare with the previous & next element. That’s pretty simple. But the concept of bitonic search leads up to more optimized solution reducing the number of comparison.


// 🎨 方法一：二分查找

/**
 * function to find the max
 * @param {*} nums
 */
function findMaxBitonic(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = left + ((right - left) >> 1);

        // the maximum
        if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
            return nums[mid]
        }

        // in increasing zone
        if (nums[mid - 1] < nums[mid] && nums[mid] < nums[mid + 1]) {
            mid = left + 1
        }

        // in decreasing zone
        if (nums[mid - 1] > nums[mid] && nums[mid] > nums[mid + 1]) {
            mid = right - 1
        }
    }

    return -1
}
