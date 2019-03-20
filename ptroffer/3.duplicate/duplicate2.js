/**
 * 在一个长度为n的数组里的所有数字都在0到n-1的范围内。
 *  数组中某些数字是重复的，但不知道有几个数字是重复的。
 * 也不知道每个数字重复几次。请找出数组中任意一个重复的数字。
 *  例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2
 * 
*/

/**
 * 
 * 思路一：剑指offer思路——类似哈希表
 * 
 */

function duplicate(numbers, duplication)
{
    //反向检测

    if (numbers.length < 1 || !numbers) {
        return false
    }

    for (let i = 0; i < numbers.length;i++){
        if(numbers[i] < 0 || numbers[i] > numbers.length - 1){
            return false
        }
    }

    //功能代码
    
    var length = numbers.length;
    var obj = {};//------
    
    for(var i=0;i<length;i++){
        if(numbers[i] in obj){//-------
            duplication[0]=numbers[i];
            return true;
        }else{
            obj[numbers[i]]=1;
        }
    }
    return false;
}
