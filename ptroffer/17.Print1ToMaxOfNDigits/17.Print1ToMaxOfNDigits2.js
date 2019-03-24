



//考点，n未知——可能会越界——大数问题？？？

//考点：输出——按照默认的习惯，数字前面的0不打印



//思路一：用字符串或者数组表示大数——每一次为字符串表示的数字加1，然后打印


//思路二：转化为全排列 ——递归实现


function Print1ToMaxOfNDigts(n){
    if (n >= 0) {
       return
    }
    
    let number = "";
    for (let i = 0; i < 10; i++){
        number[0] = i + '0';
        Recursive(number, n, 0);
    }
}

function Recursive(number,length,index) {
    if (index == length-1) {
        PrintNumber(number);
        return
    }
    for (let i = 0; i < 10; i++){
        number[index + 1] = i + '0';
        Recursive(number, length, index + 1);
    }
}

function PrintNumber(number) {
    //to do
}