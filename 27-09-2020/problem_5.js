function longest_subarray(num, limit) {
  let ll = 1;
  let si = 0;
  while (si + ll <= num.length) {
    let subarray = num.slice(si, si + ll);
    let max = Math.max(...subarray);
    let min = Math.min(...subarray);

    while (si + ll < num.length) {
      let extend = ll + 1;
      let maxTmp = max;
      let minTmp = min;
      if (max - min > limit) break;
      let new_ele = num[si + extend - 1];
      if (new_ele > max) maxTmp = new_ele;
      else if (new_ele < min) minTmp = new_ele;

      let diff = Math.max(maxTmp - new_ele, new_ele - minTmp);

      if (diff <= limit) {
        max = maxTmp;
        min = minTmp;
        ll = extend;
      } else break;
    }
    si++;
  }
  console.log(ll);
}

longest_subarray([10, 1, 2, 4, 7, 2], 5);
