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

var b = [1,2,3,1,2,4,5];

var z= function (a)
{
for (let i=0;i<a.length;i++)
{
    for(let j=i+1;j<a.length;j++)
    {
        if(a[i]==a[j])
        {
          for(let k=j;k<a.length-1;k++)
          {
              a[k] = a[k+1];
              
          }
          a.splice(-1,1);
        }
    }
}
console.log(a);
}

z(b);

// //IIFT

(function (a)
{
for (let i=0;i<a.length;i++)
{
    for(let j=i+1;j<a.length;j++)
    {
        if(a[i]==a[j])
        {
          for(let k=j;k<a.length-1;k++)
          {
              a[k] = a[k+1];
              
          }
          a.splice(-1,1);
        }
    }
}
console.log(a);
})(b);

});

