
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
  var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
};

// adding height and weight to fluffyy

cat['height'] = 5;
cat['weight'] = 6;

//Fluffy name is spelled wrongly. Update it to Fluffyy

cat.name = 'Fluffyy';

// List all the activities of Fluffyy’s catFriends.

for(let i=0; i<=cat.catFriends.length ;i++)
{
    console.log(cat.catFriends[i].activities);
}

//Print the catFriends names
for(let i=0; i<=cat.catFriends.length ;i++)
{
    console.log(cat.catFriends[i].name);
}

//Print the total weight of catFriends
var sum=0;
for(let i=0; i<cat.catFriends.length ;i++)
{
    sum = sum+cat.catFriends[i].weight;
}
console.log(sum);

//Print the total activities of all cats

console.log(cat.activities);
for(let i=0; i<cat.catFriends.length ;i++)
{
console.log(cat.catFriends[i].activities);
}

//Add 2 more activities to bar & foo cats
for(let i=0; i<cat.catFriends.length ;i++)
{
 cat.catFriends[i].activities[2]='cute';
 cat.catFriends[i].activities[3]='bubbly';
    
 }

//Update the fur color of bar

cat.catFriends[1].furcolor = 'black';

console.log(cat);

//end-here
});


