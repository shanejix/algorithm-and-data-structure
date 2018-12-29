##### 思想

- 一个有序的数据集合，
- 类似分治思想
  - 通过跟区间的中间元素对比，将待查找的区间缩小为之前的一半，直到找到要查找的元素，或者区间被缩小为 0

##### 时间复杂度

假设数据大小是 n，每次查找后数据都会缩小为原来的一半（除以 2）

最坏情况下，直到查找区间被缩小为空，才停止

```c++
n,n/2,n/4,...,n/2^k

//等比数列

//k 总共缩小的次数
```

当n/2^k=1时,

- 经过了 k 次区间缩小操作，时间复杂度就是 O(k)
- n/2^k =1，求得 k=log n，所以时间复杂度就是 `**O(logn)**`

常见的`O(logn)` 的时间复杂度

- 二分查找
- 树
- 堆

`logn` 是一个非常“恐怖”的数量级(**指数爆炸**)

- 比如 n 等于 2 的32 次方，这个数很大了吧？（大约是 42 亿）
  - 也就是说，如果在 42 亿个数据中用二分查找一个数据，最多需要比较 32 次

有的时候甚至比时间复杂度是常量级 O(1) 的算法还要高效：

- 大 O 标记法表示时间复杂度的时候，会省略掉常数、系数和低阶
  - 对于常量级时间复杂度的算法来说，O(1) 有可能表示的是一个非常大的常量值，比如 O(1000)、O(10000)
  - 所以，常量级时间复杂度的算法有时候可能还没有 O(logn) 的算法执行效率高

##### 二分查找的递归与非递归实现

######循环实现

有序数组中不存在**重复元素**

```c++
int bsearch(int[] a, int n, int value) {
    int low = 0;
    int high = n - 1;
    while (low <= high) {
    	int mid = (low + high) / 2;
        
        if (a[mid] == value) {
        	return mid;
        } else if (a[mid] < value) {
        	low = mid + 1;
        } else {
        	high = mid - 1;
        }
    }
    return -1;
}
```

1. 循环退出条件

   注意是 `low<=high`，而不是 low<high

2. mid 的取值

   mid=(low+high)/2 这种写法是有问题的

   - 如果 low 和 high 比较大的话，**两者之和有可能会溢出**
   - 改进1：`mid =low+(high-low)/2`
   - 改进2：`low+((high-low)>>1)`(位操作更快)

3. low 和 high 的更新

   `low=mid+1，high=mid-1`



###### 递归实现

```c++
int bsearch(int[] a, int n, int val) {
	return bsearchInternally(a, 0, n - 1, val);
}
int bsearchInternally(int[] a, int low, int high, int value) {
    if (low > high) return -1;
    
    int mid = low + ((high - low) >> 1);
    if (a[mid] == value) {
    	return mid;
    } else if (a[mid] < value) {
    	return bsearchInternally(a, mid+1, high, value);
    } else {
    	return bsearchInternally(a, low, mid-1, value);
    }
}
```



##### 二分查找应用场景的局限性

二分查找的应用场景是有很大局限性：

- 依赖**顺序表结构**——数组
  - 二分查找算法需要按照下标随机访问元素
    - 数组按照下标随机访问数据的时间复杂度是 O(1)，
    - 链表随机访问的时间复杂度是 O(n)
  - 如果数据是通过其他数据结构存储的，则无法应用二分查找
- 针对**有序数据**
  - 数据必须是有序的
  - 如果数据没有序，需要先排
    - 如果是**静态的数据集合**，
      - 没有频繁地插入、删除，可以进行一次排序，多次二分查找
      - 这样排序的成本可被均摊，二分查找的边际成本就会比较低
    - 如果是**动态数据集合**
      - 数据集合有频繁的插入和删除操作
      - 用二分查找，
        - 要么每次插入、删除操作之后保证数据仍然有序，
        - 要么在每次二分查找之前都先进行排序
      - 维护有序的成本都很高
- 不适合**数据量太小**
  - 数据量很小，完全没有必要用二分查找，顺序遍历就足够了
  - 如果数据之间的比较操作非常耗时，不管数据量大小，都推荐使用二分查找
- 不适合**数据量太大**
  - **底层依赖数组**，
    - 而数组为了**支持随机访问**的特性，要求**内存空间连续**，对内存的要求比较苛刻



##### 常见二分查找的变形问题

1. 查找第一个值等于给定值的元素

   ```c++
   int bsearch(int[] a, int n, int value) {
       int low = 0;
       int high = n - 1;
       
       while (low <= high) {
           int mid = low + ((high - low) >> 1);
           
           if (a[mid] > value) {
           	high = mid - 1;
           } else if (a[mid] < value) {
           	low = mid + 1;
           } else {
           	if ((mid == 0) || (a[mid - 1] != value)) return mid;
           	else high = mid - 1;
           }
       }
       return -1;
   }
   ```

2. 查找最后一个值等于给定值的元素

   ```c++
   int bsearch(int a[],int n,int value){
       int low = 0;
       int high = n-1;
       
       while(low < = high){
           int mid = low + ((high -low)>>1);
           
           if(a[mid]>value){
               high = mid -1;
           }
           else if(a[mid]<value){
               low = mid +1;
           }
           else{
               if(mid == n -1 || a[mid+1] != value) return mid;
               else low mid+1;
           }
       }
   }
   ```

3. 查找第一个大于等于给定值的元素

   ```c++
   int bsearch(int a[],int n,int value){
       int low = 0;
       int high = n-1;
       
       while(low<=high){
           int mid = low +((high-low)>>1);
           
           if(a[mid] >= value){
               if(mid == 0 || a[mid-1] < value ){
                   return mid;
               }
               else{
                   high = mid -1;
               }
           }
           else{
               high = mid+1;
           }
       }
   }
   ```

4. 查找最后一个小于等于给定值的元素

   ```c++
   int bsearch(int a[],int n,int value){
       int low =0;
       int high = n-1;
       
       while(low <= high){
           int mid = low + ((high-low)/2);
           
           if(a[mid] <= value){
               if(mid == n-1 || a[mid+1] > value){
                   return mid;
               }
               else{
                   low = mid+1;
               }
           }
           else{
               high = mid-1;
           }
       }
   }
   ```


###### 小结

凡是用二分查找能解决的，绝大部分我们更倾向于用散列表或者二叉查找树

- 即便是二分查找在内存使用上更节省，但是毕竟内存如此紧缺的情况并不多

二分查找更适合用在“近似”查找问题，在这类问题上，二分查找的优势更加明显

- 比如几种变体问题，用其他数据结构，比如散列表、二叉树，就比较难实现





