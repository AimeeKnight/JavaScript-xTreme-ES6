var static = require('node-static');
var port = 3000;
var http = require('http')

var file = new static.Server('./public');

http.createServer(function(req, res) {
  req.addListener('end', function() {
    file.serve(req, res);
  }).resume();
}).listen(port);
