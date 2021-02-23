// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

// 方法一：单调栈法

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let len = T.length;
    let res = [];

    let stack = [];
    let rightMax = new Array(len).fill(-1);

    for (let i = 0; i < len; i++) {
        while (stack.length && T[stack[stack.length - 1]] < T[i]) {
            rightMax[stack.pop()] = i;
        }

        stack.push(i)
    }

    for (let i = 0; i < rightMax.length; i++) {
        if (rightMax[i] === -1) {
            res.push(0);
        } else {
            res.push(rightMax[i] - i)
        }
    }

    return res;

};