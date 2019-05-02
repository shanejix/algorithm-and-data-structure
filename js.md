##### 一，利用JavaScript的语言特性

###### 用好箭头函数

....

###### 输入和输出

```js
//sting

function (str){
    let line = str.split('xx');
    ....
}

//array

function (arr){
    let line = arr.map(elt => {
        //,,,
    })
}
```

###### 去重

```js
arr=[...new Set(arr)];
```

###### 排序



###### 迭代



###### 解构赋值



###### 位运算

```js
console.log(3 + (5 - 3) >> 1)//2
console.log(3 + ((5 - 3) / 2))//4
console.log(3 + ((5 - 3) >> 1))//4
console.log(3 + (5 - 3 >> 1))//4
//位运算比“+”的有优先级低

//求中位数
mid= left + (right-left>>1)

//~~等价于Math.floor()

// 判断奇偶
evenNum & 1 === 0; // 偶数
oddNum & 1 === 1; // 奇数

// 判断数是否是2的幂次方
num & num - 1 === 0;
 
// 翻转数的第K位
num ^= 1 << k;
 
// 将第K位设为0
num &= ~(1 << k);
 
// 将第K位设为1
num |= 1 << K;
 
// 判断第K位是否为0
num & 1 << k === 0;
```

###### 正则表达式

正则：`exec()`，`test()`

字符串：`search()`，`match()`，`replace()`，`split()`

