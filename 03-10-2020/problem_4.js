function min(pile, h) {
  let i = 1;
  let j = 1;
  var p = [...pile];
  let flag = 1;
  while (flag > 0) {
    while (i <= parseInt(h)) {
      if (p[p.length - 1] <= j) {
        p.pop();
        console.log(p);
      } else {
        p[p.length - 1] -= j;
        console.log(p);
      }
      i++;
      if (p.length === 0) {
        flag = 0;
      }
    }
    p = [...pile];
    j++;
    i = 0;
  }

  console.log(j - 1);
}
min([3, 6, 7, 11], 8);
