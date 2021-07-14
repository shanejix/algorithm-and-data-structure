function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    // 升序
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  if (left.length) {
    result.push(...left);
  }

  if (right.length) {
    result.push(...right);
  }

  return result;
}

function sort(arr) {
  if (!arr) return;

  return mergeSort(arr, 0, arr.length - 1);
}

let testArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(sort(testArr));
