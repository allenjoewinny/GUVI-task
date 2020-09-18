let t = [1, 2, 3, 4, 5, 6, 7];

let opt_display =[];


function my_filter(arr, filterFunc) {
  const filterArr = [];

  for (let i = 0; i < arr.length; i++) {
    const result = filterFunc(arr[i], i, arr);

    if (result) filterArr.push(arr[i]);
  }
  return filterArr;
}

let p = my_filter(t, (num: number) => num % 2 === 0);
console.log(p);
opt_display[4]=p;

function my_reduce(arr, reduce_fun, initial_value) {
  let accumulator = initial_value === undefined ? 0 : initial_value;

  for (let i = 0; i < arr.length; i++) {
    accumulator = reduce_fun(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

let z = my_reduce(t, (acc, num) => acc + num, 0);
console.log(z);
opt_display[2] =z;

function my_find(arr, find_fun, initial_value) {
  let start = initial_value === undefined ? 0 : initial_value;
  let result = [];

  let j = 0;
  for (let i = start; i < arr.length; i++) {
    if (find_fun(arr[i])) {
      result[j] = arr[i];
      j++;
    }
  }
  return result[0];
}

console.log(my_find(t, (num) => num > 2));
opt_display[1] =my_find(t, (num) => num > 2);
function my_chunk(arr, size) {
  let result = [];
  let i = 0;
  let count = 0;

  while (i < arr.length) {
    let temp = [];

    for (let j = 0; j < size; j++) {
      if (arr[i + j]) {
        temp[j] = arr[i + j];
      }
    }
    i = i + size;
    result[count] = temp;
    count++;
  }
  return result;
}

let k = (my_chunk(t, 2));
console.log(k)
opt_display[0]=k;
function my_sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(my_sum(t));
opt_display[3]=my_sum(t);

let check =
[
  'chunk',
  "find",
  "reduce",
  "sum",
  "filter"
];

let opr_dis =
[
  'function used:my_chunk(t, 2) and opertaion performed is to divide the main array into chunks of array with size 2',
  'function used:my_find(t, (num) => num > 2) and operation performend is retrn a array of value wich are grater than 2 in main array',
  'function used:my_reduce(t, (acc, num) => acc + num, 0) and operation performed is it returns the sum of all elements in the array',
  'function used:my_sum(t) and operation performed is it returns the sum of all elements in the array',
  'function used:my_filter(t, (num: number) => num % 2 === 0) operation perforemed is it returns the array of values which are divsible by 2 from the main array'
]

function change_content()
{
  let id = document.getElementById('sel').value;
  let dis = document.getElementById('cnt');
  let o = document.getElementById("opt");
  for(let i=0;i<check.length;i++)
  {
    if(id == check[i])
    {
       dis.innerHTML = opr_dis[i];
       o.innerHTML = `Output:${opt_display[i]}`;
    }
  }

}