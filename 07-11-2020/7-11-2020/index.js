const directory = './test';
const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');

app.listen(402 ,() =>{console.log(" app is listerning at port: localhost:3000")})



app.get("/",function(req,res) {
  let result = "<table>"
  fs.readdirSync(directory).forEach(file => {
  if (fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
    result += "<tr><td><img src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/1200px-OneDrive_Folder_Icon.svg.png' width = '50' height ='50'></td><td>" + file +"</td></tr>";
  } else {
     result += "<tr><td><img src= 'https://img.icons8.com/pastel-glyph/2x/file.png' width = '50' height ='50'></td><td>" + file +"</td></tr>";
  }
});
result += "</table>";
res.send(result);
} )