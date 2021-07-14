/**
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */
 var breakfastNumber = function (staple, drinks, x) {
    const mod = 1e9 + 7;
    let ans = 0;

    // 乱序 -> 升序
    staple.sort((a, b) => a - b);
    drinks.sort((a, b) => a - b);

    // 双指针

    // staple 从头遍历
    let i = 0;
    // drinks 从尾遍历
    let j = drinks.length - 1;

    for (; i < staple.length; i++) {
        // 对于当前 i 找到 满足条件的 最大 j 值
        while (j >= 0 && staple[i] + drinks[j] > x) {
            j--
        }
        if (j === -1) break

        // 最大 j 值 ：对于小于最大 j 值 drinks，自然就是本轮 i 值满足的所有解
        ans += j + 1
        // 依据题意
        ans %= mod;
    }

    return ans
};