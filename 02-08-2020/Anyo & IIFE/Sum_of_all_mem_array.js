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
var sum_1 =0;
var sum_2 =0;
 var a = function (arr)
  {
      for(let i=0;i<arr.length;i++)
      {
          sum_1 = sum_1+ arr[i];
      }
      console.log(sum_1);
      
  }
  
  var k = [1,2,3,4,5,5];
 
  
  a(k);
  
  // IIFE
   ( function (arr)
  {
      for(let i=0;i<arr.length;i++)
      {
           sum_2 = sum_2+ arr[i];
      }
      console.log(sum_2);
      
  })(k);
  
//end-here
});

