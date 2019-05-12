// 题目描述
// 求出1~13的整数中1出现的次数,
// 并算出100~1300的整数中1出现的次数？
// 为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,
// 但是对于后面问题他就没辙了。ACMer希望你们帮帮他, 并把问题更加普遍化,
// 可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。

//思路：直观的解法

function NumberOf1Between1AndN_Solution(n)
{
    let num = 0;

    for (let i = 1; i <= n; i++){
        num += numberOf(i);
    }

    return num;
}

function numberOf(number) {
    let count = 0;
    while (number > 0) {
        if (number % 10 == 1) {
            count++;
        }
        number = number / 10;
    }
    return count;
}