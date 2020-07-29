var request = new XMLHttpRequest()
var latitude = 33.441792;
var longitude = -94.037689 ;
var key = 'a6a3ba47be927cecaa044a6528b7bd99' ;
var url_string = 'https://api.openweathermap.org/data/2.5/onecall?lat=';
var url =url_string.concat(latitude,'&lon=',longitude,'&appid=',key);


// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url, true) 
request.send();

request.onload = function() {
  // Begin accessing JSON data here
//console.log(this.response);
var data = JSON.parse(this.response)
console.log(data);
}