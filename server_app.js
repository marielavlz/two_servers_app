var http = require('http');

function handleRequest(req, res){
  res.end("This thing works!" + req.url);
}

var server = http.createServer(handleRequest);

console.log(typeof server);

function serverOne() {
  var PORT = 7000;
  server.listen(PORT, function(){
    console.log('You are amazing! The world is a better place with you!');
  });
};
serverOne();

function serverTwo() {
  var PORT = 7500;
  server.listen(PORT, function(){
    console.log('You are not amazing. You suck.');
  });
};
serverTwo();
