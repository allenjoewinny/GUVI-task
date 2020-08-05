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
var b =[1,2,3,4,5,6,7];

var p =function(a)
{
    for(let i=0;i<a.length;i++)
{
    if(a[i]==1)
    {
        
    }
    else if(a[i]==2)
    {
        console.log(a[i]);
    }
    else
    {
        let flag =0;
        for(let j=2;j<=(a[i]/2);j++)
        {
            if(a[i]%j === 0)
            {
               flag =flag+1;
            }
        }
        if(flag === 0)
        {
            console.log(a[i]);
        }
    }
}
}
p(b);

//IIFE
(function(a)
{
    for(let i=0;i<a.length;i++)
{
    if(a[i]==1)
    {
        
    }
    else if(a[i]==2)
    {
        console.log(a[i]);
    }
    else
    {
        let flag =0;
        for(let j=2;j<=(a[i]/2);j++)
        {
            if(a[i]%j === 0)
            {
               flag =flag+1;
            }
        }
        if(flag === 0)
        {
            console.log(a[i]);
        }
    }
}
})(b);

});

