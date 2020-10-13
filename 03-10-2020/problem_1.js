function check(input) {
  let i = 0;
  let c_1 = 0;
  let c_2 = 0;
  while (i < input.length) {
    if (input[i] == "(") {
      c_1++;
    } else {
      c_2++;
    }
    i++;
  }
  console.log(Math.abs(c_1 - c_2));
}

check("((()");
