// in the given array we need to find the number of hot pairs ie a[i] =a[j], i<j 

let a = [1, 2, 1, 1, 3, 4, 2, 4];

let obj = {};

for (let i = 0; i < a.length; i++) {
  if (obj[a[i]] === undefined) {
    obj[a[i]] = 1;
  } else {
    obj[a[i]] = obj[a[i]] + 1;
  }
}
let count = 0;
Object.keys(obj).forEach((key) => {
  count += Math.floor((obj[key] * (obj[key] - 1)) / 2);
});
console.log(count);
