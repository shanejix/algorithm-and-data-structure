// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int i, int j) Return the sum of the elements of the nums array in the range [i, j] inclusive (i.e., sum(nums[i], nums[i + 1], ... , nums[j]))
//  

// Example 1:

// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
// numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
// numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
//  

// Constraints:

// 0 <= nums.length <= 104
// -105 <= nums[i] <= 105
// 0 <= i <= j < nums.length
// At most 104 calls will be made to sumRange.


// 方法一：最直接的办法

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = nums || [];
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    let sum = 0;

    for (let k = i; k <= j; k++) {
        sum += this.nums[k];
    }

    return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */


// 方法二：预处理+求和转化为求差（区间和 -> 前缀差)

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.sums = new Array(nums.length);

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        this.sums[i] = (sum += nums[i]);
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    return i === 0 ? this.sums[j] : this.sums[j] - this.sums[i - 1]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

