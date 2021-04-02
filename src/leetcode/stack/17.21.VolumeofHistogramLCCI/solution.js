// Imagine a histogram (bar graph). Design an algorithm to compute the volume of water it could hold if someone poured water across the top. You can assume that each histogram bar has width 1.



// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of water (blue section) are being trapped. Thanks Marcos for contributing this image!

// Example:

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

// 方法一：单调栈

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let res = 0;
    let len = height.length;

    // 维护一个栈底到栈顶的单调递减的栈，存储的是 height的下标
    let stack = [];

    for (let i = 0; i < height.length; i++) {

        // 非单调递减，则能计算接雨水
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            // 栈内至少有两个元素 top 和 left 才能接雨水
            const top = stack.pop();

            if (!stack.length) {
                break;
            }

            const left = stack[stack.length - 1];

            const currWidth = i - left - 1;
            const currHeiht = Math.min(height[left], height[i]) - height[top]

            res += currHeiht * currWidth;

        }

        // 单调递减
        stack.push(i);

    }

    return res
};

// 方法二：预处理 + xx


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let len = height.length;

    if (len === 0) return 0

    const leftMax = new Array(len).fill(0);
    leftMax[0] = height[0];
    for (let i = 1; i < len; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }

    const rightMax = new Array(len).fill(0);
    rightMax[len - 1] = height[len - 1];
    for (let i = len - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1])
    }

    let res = 0;
    for (let i = 0; i < len; i++) {
        res += Math.min(leftMax[i], rightMax[i]) - height[i]
    }

    return res;
};