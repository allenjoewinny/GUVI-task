
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
// to print the odd numbers in a Array

arr =[1,2,3,4,4,5,6,8,9];

var a= function(b)
{
    for(var i=0;i<b.length;i++)
    {
        if(b[i]%2 !==0)
        {
             console.log(b[i]);
        }
       
    }
}

a(arr);

// IIFE way:
( function(c)
{
    for(var j=0;j<c.length;j++)
    {
        if(c[j]%2 !==0)
        {
             console.log(c[j]);
        }
       
    }
}
) (arr);

//end-here
});


