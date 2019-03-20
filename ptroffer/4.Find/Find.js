/**
 *  题目描述
    在一个二维数组中（每个一维数组的长度相同），
    每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
    请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

 */

 //思路：理由有序数组的特点，从左向右递增，从上向下递减

function Find(target, array)
{
    // write code here

    //反向检测

    if (!array || array.length == 0 || !Number(target)) {
        return false
    }
    
    let raw = array.length;
    let col = array[0].length;

    if (raw == 0 && col == 0) {
        return false;
    }

    //功能代码

    let r = 0;//从上往下
    let l = col - 1;//从右往左

    while(r < raw && l >= 0){
        if (array[r][l] < target) {
            r++;
        } else if (arr[r][l] > target) {
            l--;
        } else {
            return true;
        }
    }

    if (r >= raw-1 || l <= 0) {
        return false
    }

}