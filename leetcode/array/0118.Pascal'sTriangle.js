// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


//  

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
//  

// Constraints:

// 1 <= numRows <= 30

// 方法一：暴力

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]]
    if (numRows === 2) return [[1], [1, 1]];

    const ans = [[1], [1, 1]]
    for (let i = 2; i < numRows; i++) {
        lastSeq = ans[i - 1];

        let currSeq = [1];

        for (let j = 1; j < lastSeq.length; j++) {
            currSeq.push(lastSeq[j - 1] + lastSeq[j]);
        }

        currSeq.push(1);
        ans.push(currSeq);
    }

    return ans
};