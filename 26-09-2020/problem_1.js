let cost = function (arr, cost_arr) {
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      result += Math.min(cost_arr[i], cost_arr[i + 1]);
    }
  }
  return result;
};

cost("abaac", [1, 2, 3, 4, 5]);

console.log(cost("abaac", [1, 2, 3, 4, 5]));
