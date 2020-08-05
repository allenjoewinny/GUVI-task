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

// to remove the duplicates from the Array

var arr = [1,2,3,1,2,4,5];

var z= function (a,b)
{
for (let i=0;i<b;i++)
{
    a.reverse();
}
console.log(a);
}

z(arr,3);

// //IIFT

(function (a,b)
{
for (let i=0;i<b;i++)
{
    a.reverse();
}
console.log(a);
})(arr,3);

});

