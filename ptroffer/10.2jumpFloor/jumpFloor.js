// 题目描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果


/**
 * 分析：
 * 
 * 假设f(n)表示——n级台阶的走法
 * 
 * 那么，f（n）可以分为：第一步跳一阶和剩下的f（n-1）或者第一步跳两阶和剩下的f（n-2）
 * 
 * 因此f(n)=f(n-1)+f(n-2)  ——  斐波拉契数列
 * 
 * 
 */

 //采用循环的替代递归的方法
 
function jumpFloor(number)
{
    if (number <= 0) {
        return 0;
    } else if (number == 1) {
        return 1;
    } else {
        let arr = [1, 1];//牺牲空间
        for (let i = 2; i <= number; i++){
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        return arr[number];
    }
}