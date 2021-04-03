// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
//  

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
//  

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

// 方法一：语言特性

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let isExit = false;

    let m = matrix.length;
    let n = matrix[0].length;

    let row = -1;

    for (let i = 0; i < m - 1; i++) {
        if (target >= matrix[i][0] && target < matrix[i + 1][0]) {
            row = i
        }
    }

    if (row === -1) {
        row = m - 1
    }

    isExit = matrix[row].indexOf(target) !== -1

    return isExit
};

// 方法二：两次二分

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const rowIndex = binarySearchFirstColumn(matrix, target);
    if (rowIndex < 0) {
        return false;
    }
    return binarySearchRow(matrix[rowIndex], target);
};

const binarySearchFirstColumn = (matrix, target) => {
    let low = -1, high = matrix.length - 1;
    while (low < high) {
        const mid = Math.floor((high - low + 1) / 2) + low;
        if (matrix[mid][0] <= target) {
            low = mid;
        } else {
            high = mid - 1;
        }
    }
    return low;
}

const binarySearchRow = (row, target) => {
    let low = 0, high = row.length - 1;
    while (low <= high) {
        const mid = Math.floor((high - low) / 2) + low;
        if (row[mid] == target) {
            return true;
        } else if (row[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return false;
}
