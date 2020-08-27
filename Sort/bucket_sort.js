/**
 *
 * @param {待排数组} arr
 */
function insert_sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let j = i;
    for (; j > 0; j--) {
      if (value < arr[j - 1]) {
        arr[j] = arr[j - 1];
      } else {
        break;
      }
    }
    arr[j] = value;
  }
}

/**
 *
 * @param {待排序数组} arr
 * @param {桶的个数} k
 * @param {桶的尺度大小} s
 */
function bucketSort(arr, k, s) {
  // 制造k个桶
  const buckets = Array.from({ length: k }, () => []);
  // 将数据装入k个桶中
  for (let i = 0; i < arr.length; i++) {
    // 桶序号
    const idx = Math.floor(arr[i] / s);
    buckets[idx].push(arr[i]);
  }

  // 对每个桶进行排序
  for (let j = 0; j < buckets.length; j++) {
    // 插入排序
    insert_sort(buckets[j]);
  }

  // 连接k个桶
  return [].concat(...buckets);
}

let testArr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// insert_sort(testArr);
// console.log(testArr);

console.log(bucketSort(testArr, 2, 5));
