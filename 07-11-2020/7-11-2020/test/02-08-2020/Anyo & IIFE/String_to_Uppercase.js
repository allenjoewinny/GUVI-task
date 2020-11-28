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
 var a = function (arr)
  {
      for(let i=0;i<arr.length;i++)
      {
          let z = arr[i].toUpperCase();
           console.log(z);
      }
      
      
  }
  
  var k = ['allen', 'is','good'];
 
  
  a(k);
  
  // IIFE
   ( function (arr)
  {
      for(let i=0;i<arr.length;i++)
      {
          let z = arr[i].toUpperCase();
           console.log(z);
      }
      
      
  })(k);
  
//end-here
});

