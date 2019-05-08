// 题目描述
// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 例如输入一个长度为9的数组{ 1, 2, 3, 2, 2, 2, 5, 4, 2 } 。
// 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。
// 如果不存在则输出0。

//思路：

//遍历arr，统计每个字母出现的次数且记录位置

function MoreThanHalfNum_Solution(numbers)
{
    let count = {};
    numbers.forEach(val => {
        if (count[val]) {
            count[val]++;
        } else {
            count[val] = 1;
        }
    });

    let max = 0;//Number.MIN_SAFE_INTEGER
    let letter;
    for (i in count) {
        if (count[i] > max) {//hasOwnProperty
            max = count[i];
            letter = i;
        }
    }

    if (max > Math.floor(numbers.length / 2)) {//>>1
        return letter;
    } else {
        return 0;
    }
}