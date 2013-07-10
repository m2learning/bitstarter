var express = require('express');
var fs = requite('fs');

var finename = 'index.html';

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var msg = fs.readFileSync(filename, 'utf8');
  response.send(msg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
