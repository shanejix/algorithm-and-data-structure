// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

//  

// Example 1:

// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.
// Example 2:

// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].
// Example 3:

// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].
// Example 4:

// Input: fruits = [3,3,3,1,2,1,1,2,3,3,4]
// Output: 5
// Explanation: We can pick from trees [1,2,1,1,2].
//  

// Constraints:

// 1 <= fruits.length <= 105
// 0 <= fruits[i] < fruits.length

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/fruit-into-baskets
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🔥🔥🔥 翻译：求只包含两种元素的最长连续子序列

// 方法一：滑动窗口

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let len = fruits.length;

    // 维护窗口内的种类个数
    let set = new Set();

    set.add(fruits[0]);
    set.add(fruits[1]);

    // 滑动窗口的右侧指针
    let end = 2
    // 滑动窗口左侧指针
    let start = 0
    while (end < len) {
        set.add(fruits[end]);
        while (set.size > 2) {
            start++
        }
        end++
    }

    return end - start
};