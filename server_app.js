var http = require('http');

function handleRequestOne(request, response) {
  response.end("You're amazing!" + req.url);
}

function handleRequestTwo(request, response) {
  response.end("You are not amazing." + req.url);
}

var PORT_ONE = 7000;
var PORT_TWO = 7500;

console.log(typeof server);

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORT_ONE, function(){
  console.log("You're amazing!");
});

serverTwo.listen(PORT_TWO, function() {
  console.log("You are not amazing.");
});
