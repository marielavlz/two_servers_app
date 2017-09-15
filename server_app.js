var http = require('http');

function handleRequestOne(request, response) {
  response.end("You're amazing!" + request.url);
}

function handleRequestTwo(request, response) {
  response.end("You are not amazing. You suck." + request.url);
}

// var PORT_ONE = 7000;
// var PORT_TWO = 7500;

var serverOne = http.createServer(handleRequestOne).listen(7000, function(){
  console.log("You're amazing!");
});

var serverTwo = http.createServer(handleRequestTwo).listen(7500, function(){
  console.log("You are not amazing. You suck.");
});

console.log(typeof serverOne);
console.log(typeof serverTwo);

// serverOne.listen(PORT_ONE, function(){
//   console.log("You're amazing!");
// });
//
// serverTwo.listen(PORT_TWO, function() {
//   console.log("You are not amazing.");
// });
