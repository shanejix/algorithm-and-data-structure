如果数据存储在链表中，就真的没法用二分查找算法了吗？

- 实际上，只需要对链表稍加改造，就可以支持类似“二分”的查找算法
- 把造之后的数据结构叫作**跳表（Skip list）**

跳表（Skip list）

- 各方面性能都比较优秀的**动态数据结构**
- 支持快速的插入、删除、查找操作，
- 简单，容易实现，不复杂，
- 甚至可以替代红黑树（Red-black tree）

## 如何理解“跳表”？

链表加多级**索引**的结构，就是跳表

## 时间复杂度

在一个单链表中查询某个数据的时间复杂度是 `O(n)`

在一个具有多级索引的跳表中，查询某个数据的时间复杂度是多少呢？

- 如果每两个结点抽出一个结点作为上一级索引的结点，
  - 第一级索引的结点个数大约就是 n/2，
  - 第二级索引的结点个数大约就是 n/4，
  - 第三级索引的结点个数大约就是 n/8，
  - 依次类推...
- 第 k 级索引的结点个数是第 k-1 级索引的结点个数的 1/2，那第 k级索引结点的个数就是 `n/(2^k)`
  - 假设索引有 h 级，最高级的索引有 2 个结点
  - 通过上面的公式，我们可以得到 `n/(2^h)=2`，从而求得`h=log n-1`
  - 如果包含原始链表这一层，整个跳表的高度就是 `log n`
  - 在跳表中查询某个数据的时候，如果每一层都要遍历 m 个结点，
  - 那在跳表中查询一个数据的时间复杂度就是` O(m*logn)`

- 这个 m 的值是多少呢？
  - 每一级索引都最多只需要遍历 `3 个结点`，
  - 假设要查找的数据是 x，
    - 在第 k 级索引中，遍历到 y 结点之后，发现 x 大于 y，小于后面的结点 z，
    - 所以通过 y 的 down 指针，从第 k 级索引下降到第 k-1 级索引
    - 在第 k-1 级索引中，y和 z 之间只有 3 个结点（包含 y 和 z），
    - 所以，在 K-1 级索引中最多只需要遍历 3 个结点，
    - 依次类推，每一级索引都最多只需要遍历 3 个结点
- 所以在跳表中查询任意数据的时间复杂度就是 `O(logn)`(跟二分查找一样)

基于单链表实现了二分查找

- 前提是建立了很多级索引
- **空间换时间**

## 空间复杂度

跳表需要存储多级索引，因此比单链表需要消耗更多的空间

- 假设原始链表大小为 n，那
  - 第一级索引大约有 n/2个结点，
  - 第二级索引大约有 n/4 个结点，
  - 以此类推...（每上升一级就减少一半）
  - 直到剩下 2 个结点
  - 每层索引的结点数总和:` n/2+n/4+n/8…+8+4+2=n-2`(等比数列)
  - 所以，跳表的空间复杂度是 `O(n)`

## 如何降低索引占用的内存空间呢？

- 两个结点抽一个结点到上级索引——（推广）每三个结点或五个结点

每三个结点抽一个索引：

- 第一级索引需要大约 n/3 个结点，

- 第二级索引需要大约 n/9 个结点

- 以此类推...（每上升一级就索引结点个数都除以 3）

- 假设最高一级的索引结点个数是1

- 每层索引的结点数总和：` n/3+n/9+n/27+…+9+3+1=n/2`

- 尽管空间复杂度还是`O(n)`，

- 但比上面的每两个结点抽一个结点的索引构建方法，要**减少了一半**的索引结

  点存储空间

实际上，不必太在意索引占用的额外空间

- 原始链表中存储的有可能是很大的对象，
- 而索引结点只需要**存储关键值和几个指针**，并不需要存储对象，
- 所以当对象比索引结点大很多时，那索引占用的额外空间就可以忽略了

## 高效的动态插入和删除

动态的插入、删除操作的时间复杂度也是 `O(logn)`

- 插入
  - 对于跳表来说查找某个结点的的时间复杂度是 O(logn)，
  - 查找某个数据应该插入的位置，方法也是类似的，时间复杂度也是 O(logn)
- 删除
  - 如果这个结点在索引中也有出现，除了要删除原始链表中的结点，还要删除索引中的
  - 在查找要删除的结点的时候，一定要获取前驱结点（单链表）

## 跳表索引动态更新

当不停地往跳表中插入数据时，如果不更新索引，就有可能出现某 2 个索引结点之间数据非常多的情况

极端情况下，跳表还会退化成单链表

作为一种动态数据结构，需要某种手段来维护索引与原始链表大小之间的平衡——

通过**随机函数**来维护跳表的“平衡性”

- 比如随机函数生成了值 K，那
- 就将这个结点添加到第一级到第 K 级这 K 级索引中
- redis有序集合跳表实现

## 为什么 Redis 要用跳表来实现有序集合，而不是红黑树？

插入、删除、查找以及迭代输出有序序列这几个操作，红黑树也可以完成，时间复杂度跟跳表是一样

**但是，按照区间来查找数据这个操作，红黑树的效率没有跳表高**

- 对于按照区间查找数据这个操作，跳表可以做到 O(logn) 的时间复杂度定位区间的起点，然后在原始链表中顺序往后遍历就可以了
