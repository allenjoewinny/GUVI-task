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
var b =[11 ,234, 555,678,454,678,787];

var p =function(a)
{
    for(let i=0;i<a.length;i++)
{
  var  temp = (String(a[i]).split("").reverse().join(""));
 
   if(temp == a[i])
   {
    console.log(a[i]);
   }
}
}


p(b);

// //IIFE
(function(a)
{
    for(let i=0;i<a.length;i++)
{
  var  temp = (String(a[i]).split("").reverse().join(""));
 
   if(temp == a[i])
   {
    console.log(a[i]);
   }
}
})(b);


});

