function day_list(list) {
  arr = [];
  let j;
  for (let i = 0; i < list.length; i++) {
    for (j = i + 1; j < list.length; j++) {
      if (list[i] < list[j]) {
        arr.push(j - i);
        break;
      } else if (j == list.length - 1) {
        arr.push(0);
      }
    }
    if (i == list.length - 1) {
      arr.push(0);
    }
  }
  console.log(arr);
}

day_list([73, 74, 75, 71, 69, 72, 76, 73]);
