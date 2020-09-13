var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var proxy = "https://cors-anywhere.herokuapp.com/"
var request = new XMLHttpRequest();
request.open('GET','https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com', true)
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.responseText)
console.log(data)
}
request.send()
