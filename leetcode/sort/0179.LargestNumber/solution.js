// Given a list of non-negative integers nums, arrange them such that they form the largest number.

// Note: The result may be very large, so you need to return a string instead of an integer.

//  

// Example 1:

// Input: nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"
// Example 3:

// Input: nums = [1]
// Output: "1"
// Example 4:

// Input: nums = [10]
// Output: "10"
//  

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {

    nums.sort((a, b) => {

        let sa = 10;
        let sb = 10;

        while (sa <= a) {
            sa *= 10;
        }

        while (sb <= b) {
            sb *= 10;
        }

        return ('' + (sa * b + a)) - ('' + (sb * a + b))
    })

    if (nums[0] === 0) {
        return '0'
    }

    return nums.join('')
};