var t = [1, 2, 3, 4, 5, 6, 7];
var opt_display = [];
function my_filter(arr, filterFunc) {
    var filterArr = [];
    for (var i = 0; i < arr.length; i++) {
        var result = filterFunc(arr[i], i, arr);
        if (result)
            filterArr.push(arr[i]);
    }
    return filterArr;
}
var p = my_filter(t, function (num) { return num % 2 === 0; });
console.log(p);
opt_display[4] = p;
function my_reduce(arr, reduce_fun, initial_value) {
    var accumulator = initial_value === undefined ? 0 : initial_value;
    for (var i = 0; i < arr.length; i++) {
        accumulator = reduce_fun(accumulator, arr[i], i, arr);
    }
    return accumulator;
}
var z = my_reduce(t, function (acc, num) { return acc + num; }, 0);
console.log(z);
opt_display[2] = z;
function my_find(arr, find_fun, initial_value) {
    var start = initial_value === undefined ? 0 : initial_value;
    var result = [];
    var j = 0;
    for (var i = start; i < arr.length; i++) {
        if (find_fun(arr[i])) {
            result[j] = arr[i];
            j++;
        }
    }
    return result[0];
}
console.log(my_find(t, function (num) { return num > 2; }));
opt_display[1] = my_find(t, function (num) { return num > 2; });
function my_chunk(arr, size) {
    var result = [];
    var i = 0;
    var count = 0;
    while (i < arr.length) {
        var temp = [];
        for (var j = 0; j < size; j++) {
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
var k = (my_chunk(t, 2));
console.log(k);
opt_display[0] = k;
function my_sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(my_sum(t));
opt_display[3] = my_sum(t);
var check = [
    'chunk',
    "find",
    "reduce",
    "sum",
    "filter"
];
var opr_dis = [
    'function used:my_chunk(t, 2) and opertaion performed is to divide the main array into chunks of array with size 2',
    'function used:my_find(t, (num) => num > 2) and operation performend is retrn a array of value wich are grater than 2 in main array',
    'function used:my_reduce(t, (acc, num) => acc + num, 0) and operation performed is it returns the sum of all elements in the array',
    'function used:my_sum(t) and operation performed is it returns the sum of all elements in the array',
    'function used:my_filter(t, (num: number) => num % 2 === 0) operation perforemed is it returns the array of values which are divsible by 2 from the main array'
];
function change_content() {
    var id = document.getElementById('sel').value;
    var dis = document.getElementById('cnt');
    var o = document.getElementById("opt");
    for (var i = 0; i < check.length; i++) {
        if (id == check[i]) {
            dis.innerHTML = opr_dis[i];
            o.innerHTML = "Output:" + opt_display[i];
        }
    }
}
