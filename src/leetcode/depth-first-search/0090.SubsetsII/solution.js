// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

//  

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
//  

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {

    nums = nums.sort();

    let curr = [];
    let res = new Set();

    function dfs(lvl, curr, nums) {

        if (lvl === nums.length) {
            res.add(JSON.stringify(curr));
            return
        }

        curr = [...curr, nums[lvl]];
        dfs(lvl + 1, curr, nums);

        curr = curr.slice(0, curr.length - 1);
        dfs(lvl + 1, curr, nums)
    }

    dfs(0, curr, nums);

    let ret = [];
    for (let val of res) {
        ret.push(JSON.parse(val))
    }

    return ret
};