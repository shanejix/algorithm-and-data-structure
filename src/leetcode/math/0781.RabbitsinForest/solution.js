// In a forest, each rabbit has some color. Some subset of rabbits (possibly all of them) tell you how many other rabbits have the same color as them. Those answers are placed in an array.

// Return the minimum number of rabbits that could be in the forest.

// Examples:
// Input: answers = [1, 1, 2]
// Output: 5
// Explanation:
// The two rabbits that answered "1" could both be the same color, say red.
// The rabbit than answered "2" can't be red or the answers would be inconsistent.
// Say the rabbit that answered "2" was blue.
// Then there should be 2 other blue rabbits in the forest that didn't answer into the array.
// The smallest possible number of rabbits in the forest is therefore 5: 3 that answered plus 2 that didn't.

// Input: answers = [10, 10, 10]
// Output: 11

// Input: answers = []
// Output: 0
// Note:

// answers will have length at most 1000.
// Each answers[i] will be an integer in the range [0, 999].

/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
    const count = new Map();

    // 利用 hash 对 answers 中值相同的元素 归类计数
    for (const ans of answers) {
        count.set(ans, (count.get(ans) || 0) + 1)
    }

    // 对每一类，计算兔子的最少数量，然后相加，得到最终结果res
    let res = 0;
    for (const [ans, c] of count.entries()) {
        // c 只兔子回答了 ans 则 至少有 ceil(c/ans+1) 种颜色；每种颜色的兔子有 (ans + 1) 只
        // 因此，兔子至少为 ceil(c/ans+1) * (ans + 1) 只
        res += Math.floor((c + ans) / (ans + 1)) * (ans + 1) // c + ans 是为了向上取整
    }

    return res
};