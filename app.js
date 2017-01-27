/* jshint node=true */

var server = require('node-static');
var file = new server.Server('./');

PORT = 9999;

require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  }).resume();
}).listen(PORT, function() {
  console.log('Starting Static Server on ' + PORT);
});
