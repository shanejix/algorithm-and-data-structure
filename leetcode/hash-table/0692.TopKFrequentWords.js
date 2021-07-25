// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

// Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:
// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
//     with the number of occurrence being 4, 3, 2 and 1 respectively.
// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Input words contain only lowercase letters.
// Follow up:
// Try to solve it in O(n log k) time and O(n) extra space.

// 方法一：哈希表 + 排序

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let map = new Map();

    for (let word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    // 去重后的 words
    const record = [];
    for (const word of map.keys()) {
        record.push(word);
    }

    // 排序
    record.sort((word1, word2) => {
        // return map.get(word1) === map.get(word2) ? word1 < word2 : map.get(word2) - map.get(word1)
        // 字符串比较 compare 和 > 的底层逻辑不一样
        return map.get(word1) === map.get(word2) ? word1.localeCompare(word2) : map.get(word2) - map.get(word1)
    })

    return record.slice(0, k)
};