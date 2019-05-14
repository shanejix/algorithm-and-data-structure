// 题目描述
// 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
// 例如输入数组{ 3，32，321 } ，则打印出这三个数字能排成的最小数字为321323。


//思路一：先排序

function PrintMinNumber(numbers)
{
    numbers.sort(function(a,b){
        var s1=a+''+b;
        var s2=b+''+a;
        return s1-s2;
    })
    var result="";
    numbers.map(function(num){
        result=result.concat(num)
    })
    return result;
}


//思路二：剑指offer