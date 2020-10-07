function max_length(str, limit) {
  if (!str.length) {
    console.log("invalid input");
  }
  let count = {},
    j = 0,
    result = 0,
    max_freq = 0;

  for (let i = 0; i < str.length; i++) {
    while (j < str.length && j - i - max_freq < limit) {
      if (count[str[j]] == undefined) {
        count[str[j]] = 1;
      } else {
        count[str[j]]++;
      }
      max_freq = Math.max(max_freq, count[str[j]]);
      j++;
    }

    if (j - i - max_freq > limit) {
      result = Math.max(result, j - i - 1);
    } else {
      result = Math.max(result, j - i);
    }
    count[str[i]] -= 1;
  }
  console.log(result);
}
