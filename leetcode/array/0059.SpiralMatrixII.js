// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

//  

// Example 1:


// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Example 2:

// Input: n = 1
// Output: [[1]]
//  

// Constraints:

// 1 <= n <= 20

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    if (n === 1) return [[1]];

    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let left = top = 0;
    let right = bottom = n - 1;

    let curr = 1;


    // 按层模拟
    while (left <= right && top <= bottom && curr <= n ** 2) {

        for (let col = left; col <= right; col++) {
            matrix[top][col] = curr
            curr++;
        }

        for (let row = top + 1; row <= bottom; row++) {
            matrix[row][right] = curr;
            curr++;
        }

        if (left < right && top < bottom) {
            for (let col = right - 1; col > left; col--) {
                matrix[bottom][col] = curr;
                curr++
            }
            for (let row = bottom; row > top; row--) {
                matrix[row][left] = curr;
                curr++
            }
        }

        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]

    }


    console.log(matrix);

    return matrix

};
