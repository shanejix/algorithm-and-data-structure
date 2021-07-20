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

// 方法一：滑动窗口 - 有问题

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let len = fruits.length;

    if (len <= 2) {
        return len
    }

    let ans = 0;

    // 记录窗口map 种类 => 出现次数
    let map = new Map();

    map.set(fruits[0], (map.get(fruits[0]) || 0) + 1)
    map.set(fruits[1], (map.get(fruits[1]) || 0) + 1);

    // 滑动窗口的右侧指针
    let end = 2
    // 滑动窗口左侧指针
    let start = 0
    while (end < len) {
        map.set(fruits[end], (map.get(fruits[end]) || 0) + 1);
        while (uniSize(map) > 2) {
            map.set(fruits[start], map.get(fruits[start]) - 1);
            start++
        }
        ans = Math.max(ans, end - start + 1);
        end++
    }

    return ans
};

function uniSize(map) {
    let set = new Set();
    for (let [fruit, count] of map) {
        if (count > 0) {
            set.add(fruit)
        }
    }
    return set.size
}


// 方法一：滑动窗口 - 优化

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {

    const k = 2;
    let res = 0;

    // 记录窗口map 种类 => 出现次数
    let map = new Map();
    // 滑动窗口左右指针
    let left = right = 0;

    while (right < fruits.length) {
        map.set(fruits[right], (map.get(fruits[right]) || 0) + 1)
        while (map.size > k) {
            map.set(fruits[left], (map.get(fruits[left]) - 1));
            if (map.get(fruits[left]) === 0) {
                map.delete(fruits[left]) // 🚩
            }
            left++
        }
        res = Math.max(res, right - left + 1);
        right++
    }

    return res
};
