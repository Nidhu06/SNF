var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
request.open('GET','https://dog.ceo/api/breeds/list/all', true)
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.responseText)
console.log(data)
}
request.send()
