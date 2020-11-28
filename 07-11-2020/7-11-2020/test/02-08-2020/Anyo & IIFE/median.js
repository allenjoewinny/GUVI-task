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

var a_1 =[1,4,6,8,9];
var a_2 =[10,11,14,15,89];

Array.prototype.push.apply(a_1,a_2);

var z =a_1.sort(function (a,b){return ( a-b)});

var l =a_1.length;

var k = function(a)
{
if(l%2 ===0)
{
    let result = (a[(l/2)-1]+a[(l/2)+1])/2;
    console.log(result.toFixed(2));
}
else
{
    let result = a[l/2]/2;
    console.log(result.toFixed(2));
}
}

k(z);

//IIFT

(function(a)
{
if(l%2 ===0)
{
    let result = (a[(l/2)-1]+a[(l/2)+1])/2;
    console.log(result.toFixed(2));
}
else
{
    let result = a[l/2]/2;
    console.log(result.toFixed(2));
}
})(z);


});

