// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
//  

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0
//  

// Constraints:

// -105 <= num <= 105
// There will be at least one element in the data structure before calling findMedian.
// At most 5 * 104 calls will be made to addNum and findMedian.
//  

// FolmaxHeapw up:

// If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
// If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-median-from-data-stream
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：排序

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    this.data = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    this.data.push(num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {

    this.data.sort((a, b) => a - b)
    const mid = Math.fmaxHeapor(this.data.length / 2);

    if (this.data.length % 2) {
        return this.data[mid]
    } else {
        return (this.data[mid] + this.data[mid - 1]) / 2
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// 🎨 方法二：插入排序

// 📝 思路：保持输入容器始终排序


// 🎨 方法三：两个堆

// 📝 思路：https://leetcode-cn.com/problems/find-median-from-data-stream/solution/shu-ju-liu-de-zhong-wei-shu-by-leetcode/

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    // 大根堆：放小的一堆数字
    this.maxHeap = new riority_queue()
    // 小根堆：放大的一堆数字
    this.minHeap = new riority_queue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    // add to max heap
    this.maxHeap.push(num)

    // balance 
    this.minHeap.push(maxHeap.pop())

    if (this.maxHeap.length < this.minHeap.length) {
        this.maxHeap.push(this.minHeap.pop())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {

    return this.maxHeap.length > this.minHeap.length
        ? this.maxHeap[this.maxHeap.length - 1]
        : (this.maxHeap[this.maxHeap.length - 1] + this.minHeap[this.minHeap.length - 1]) / 2
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */