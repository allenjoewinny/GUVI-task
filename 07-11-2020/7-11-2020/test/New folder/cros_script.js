var request = new XMLHttpRequest()
var url_string = 'https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';

// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true) 
request.send();

request.onload = function() {
  // Begin accessing JSON data here
//console.log(this.response);
var data = JSON.parse(this.response)
console.log(data);
}