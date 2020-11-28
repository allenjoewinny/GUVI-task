https://www.guvi.in/

var xmlhttp = new XMLHttpRequest(),
  method = 'GET',
  url = 'https://www.guvi.in/';

xmlhttp.open(method, url, true);
xmlhttp.onerror = function () {
  console.log("** An error occurred during the transaction");
};
xmlhttp.send();