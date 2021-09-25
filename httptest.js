var http = require('http');
var fs = require('fs');
var url = require('url');
var events = require('events')

var eventEmitter = new events.EventEmitter;

var server = http.createServer(function(req, res){
    eventEmitter.emit('req');
    res.end('Server Started!');
});
eventEmitter.on('req', function() {
    console.log('An event emiited is captured');
})
server.listen(3001, 'localhost' , function() {
console.log('server started!');
}); 


http.createServer(function(req, res) {
res.writeHead(200, ('Content-Type', 'text/html'));
var q = url.parse(req.url, true).query;
var text = q.fname + ' ' + q.lname;
res.end(text);
}).listen(3002);