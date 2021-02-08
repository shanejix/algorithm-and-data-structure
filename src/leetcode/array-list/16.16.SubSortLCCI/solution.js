// Given an array of integers, write a method to find indices m and n such that if you sorted elements m through n, the entire array would be sorted. Minimize n - m (that is, find the smallest such sequence).

// Return [m,n]. If there are no such m and n (e.g. the array is already sorted), return [-1, -1].

// Example:

// Input:  [1,2,4,7,10,11,7,12,6,7,16,18,19]
// Output:  [3,9]
// Note:

// 0 <= len(array) <= 1000000


/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function (array) {
    if (!array || array.length === 0) {
        return [-1, -1]
    }

    let max = array[0];
    let last = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= max) {
            max = array[i];
        } else {
            last = i;
        }
    }

    let min = array[array.length - 1];
    let first = array.length - 1;
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] <= min) {
            min = array[i]
        } else {
            first = i;
        }
    }

    if (last <= first) {
        return [-1, -1]
    } else {
        return [first, last];
    }

};