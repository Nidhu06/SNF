var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
request.open('GET','https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=4fa5cd18b10cc20f4a9d369136a87413', true)
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.responseText)
console.log(data)
}
request.send()
