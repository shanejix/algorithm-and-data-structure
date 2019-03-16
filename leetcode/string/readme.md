#### 常用API

**数组**

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array



`arr.reverse()`

- 翻转数组中的元素
- 返回arr的引用

`arr.slice(begin, end)`

- arr的浅拷贝，不包含end
- 返回提取元素的新数组

`array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`

- 删除，替换，添加
- 返回由被删元素组成的新数组

`arr.join([separator])`

- 将数组转化成用separator分隔的字符串
- 返回一个由数组元素链接的字符串

`arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array }[, 
thisArg])`

- 遍历数组元素执行callback
- 返回新数组



**字符串**

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String



`str.split([separator[, limit]])`

- 将字符串分割成字符串数组（空字符串("")被用作分隔符，则字符串会在每个字符之间分割）

- 返回源字符串以分隔符出现位置分隔而成的一个新数组

```

```

`str.trim()`

- 删除字符串两端的空格
- 返回一个新的字符串

实现trim

```js
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
```

