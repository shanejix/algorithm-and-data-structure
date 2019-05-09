// 题目描述
// 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。


//思路：

//先排序，截取前k个值

//partition函数递归

//更新最小堆

function GetLeastNumbers_Solution(input, k)
{
    let res = input.sort((a, b) => {
        return a - b;
    });

    return res.length >= k ? res.slice(0, k) : [];
}