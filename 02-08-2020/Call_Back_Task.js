
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 
function second(a,b) {
	var opr1 = 10;
	var opr2 = 90;
	b[a](opr1,opr2);
}

arr = [add,sub,mul];
// second(1,arr);  // 100
// second(2,arr);  // -80
// second(3,arr);  // 900

function add(a,d)
{
 console.log(a+d);
}
function sub(a,d)
{
 console.log(a-d);
}
function mul(a,d)
{
 console.log(a*d);
}

second(2,arr);


//end-here
});


