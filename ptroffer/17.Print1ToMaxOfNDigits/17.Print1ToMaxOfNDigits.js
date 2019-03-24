



//考点，n未知——可能会越界——大数问题？？？

//考点：输出——按照默认的习惯，数字前面的0不打印



//思路一：用字符串或者数组表示大数——每一次为字符串表示的数字加1，然后打印

function Print1ToMaxOfNDigts(n){
    if (n <= 0) {
        return;
    }

    let number = "";

    for (let i = 0; i < n; i++){
        number += "0";
    }

    while (!Increment(number)) {
        PrintNumber(number);
    }
}

function Increment(number) {
    //to do
}

function PrintNumber(number) {
    //to do
}