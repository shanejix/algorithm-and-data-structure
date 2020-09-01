function radixSort(arr) {

  // 对数组进行按位排序
  let exp = 1

  let max = get_max(arr)

  console.log(max, 'max');


  // 按位排序
  for (; Math.floor(max / exp) > 0; exp *= 10) {
    console.log(
      bucket_sort(arr, exp)
    );
  }

}
function bucket_sort(arr, exp) {

  // 创建桶
  let buckets = Array.from({ length: 10 }, () => [])

  console.log('buckets', buckets);

  // 按位分类
  for (let i = 0; i < arr.length; i++) {
    let last_num = Math.floor(arr[i] / exp) % 10

    buckets[last_num].push(arr[i])
  }

  console.log(buckets);

  let res = []
  // 连接
  for (let i = 0; i < buckets.length; i++) {
    res.push(...buckets[i])
  }

  return res

}

function get_max(arr) {
  if (!arr) return;
  let max = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max
}

let testArr = [132, 221, 313]

radixSort(testArr)
