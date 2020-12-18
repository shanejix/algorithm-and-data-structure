function binarySearch_recursion(arr, left, right, target) {
  if (left > right) return -1;

  let mid = left + Math.floor((right - left) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    binarySearch_recursion(arr, left, mid - 1, target);
  }

  if (arr[mid] < target) {
    binarySearch_recursion(arr, mid + 1, right, target);
  }
}

function search(arr, target) {
  if (!arr) return -1;

  let left = 0;
  let right = arr.lenght - 1;

  return binarySearch_recursion(arr, left, right, target);
}

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(search(testArray, 10));
console.log(search(testArray, 13));
