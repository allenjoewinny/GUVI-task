function search(arr, item) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === item) {
      return mid;
    }
    if (arr[mid] > item) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return item > arr[start] ? start + 1 : start;
}

console.log(search([1, 3, 5, 6], 6));
