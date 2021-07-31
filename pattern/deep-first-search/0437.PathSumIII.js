// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

//  

// Example 1:


// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3
// Explanation: The paths that sum to 8 are shown.
// Example 2:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: 3
//  

// Constraints:

// The number of nodes in the tree is in the range [0, 1000].
// -109 <= Node.val <= 109
// -1000 <= targetSum <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/path-sum-iii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 🎨 方法一：DFS

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {

    map = new Map();
    map.set(0, 1);

    target = targetSum;

    return dfs(root, 0);

};

function dfs(root, currSum) {
    if (root === null) {
        return 0;
    }

    currSum += root.val

    let res = map.get(currSum - target) || 0;
    map.set(currSum, (map.get(currSum) || 0) + 1);

    let left = dfs(root.left, currSum)
    let right = dfs(root.right, currSum)

    map.set(currSum, map.get(currSum) - 1);

    return res + left + right;
}




// 🎨 方法一：DFS

// 📝 思路: todo 有错误

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {

    ans = [];
    preSum = new Map();

    const path = []

    dfs(root, targetSum, path);

    return ans.length

};

function dfs(root, targetSum, path) {
    if (root === null) {
        return []
    }

    path.push(root.val)

    const pathSum = path.reduce((acc, num) => acc + num, 0)
    preSum.set(pathSum, path.length)

    console.log(preSum);

    if (preSum.has(pathSum - targetSum)) {
        let index = preSum.get(pathSum - targetSum);
        // console.log(index)
        ans.push(path.slice(index))
    }

    if (root.left) {
        dfs(root.left, targetSum, path)
    }

    if (root.right) {
        dfs(root.right, targetSum, path)
    }

    path.pop();
    preSum.delete(pathSum)
}