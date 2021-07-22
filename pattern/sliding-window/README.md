什么是滑动窗口

```

- 实质就是一种数据结构-队列

- 滑动窗口的思想就是不断的移动窗口求得满足条件的解

- 如何移动呢？向队列的末端不断追加新的元素，不满足条件则队列首端的元素，直到满足要求，一直维持，求出解

```

滑动窗口适合求解的问题

```

- 固定长度序列之和的最值

- 不固定长度序列之和的最值

- 求和利用的是和累加性质，类似可以扩展为求叠加性质问题

```

解题模板：

```js

// 初始化滑动窗口左右指针
start , end = 0


while(end < len){

    // 叠加 end 下标对应元素

    // ...

    // 对窗口类元素校验
    if( ) or while(){
        // 叠减 start 下标对应元素 直到满足条件

        // ...

        start++
    }

    // 窗口右移
    end++
}

```

leetcode 题目

- [0219. 存在重复元素 II](https://github.com/shanejix/algorithm-and-data-structure/blob/62f6224b6ca97a622b256f397ad5f0b474096efe/pattern/sliding-window/0219.ContainsDuplicateII/solution.js)
- [0209. 长度最小的子数组](https://github.com/shanejix/algorithm-and-data-structure/blob/62f6224b6ca97a622b256f397ad5f0b474096efe/pattern/sliding-window/0209.MinimumSizeSubarraySum/solution.js)
- [0003. 无重复字符的最长子串](https://github.com/shanejix/algorithm-and-data-structure/blob/62f6224b6ca97a622b256f397ad5f0b474096efe/pattern/sliding-window/0003.LongestSubstringWithoutRepeatingCharacters/solution.js)
- [0643. 子数组最大平均数 I](https://github.com/shanejix/algorithm-and-data-structure/blob/62f6224b6ca97a622b256f397ad5f0b474096efe/pattern/sliding-window/0643.MaximumAverageSubarrayI/solution.js)
- [1423. 可获得的最大点数](https://github.com/shanejix/algorithm-and-data-structure/blob/62f6224b6ca97a622b256f397ad5f0b474096efe/pattern/sliding-window/1423.MaximumPointsYouCanObtainfromCards/solution.js)
- [0904. 水果成篮](https://github.com/shanejix/algorithm-and-data-structure/blob/62f6224b6ca97a622b256f397ad5f0b474096efe/pattern/sliding-window/0904.FruitIntoBaskets/solution.js)
