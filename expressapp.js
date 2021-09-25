var express = require('express');
var http = require('http');
var fs = require('fs');

var expapp = express();
var server = http.createServer(expapp);
expapp.get('/', function(req, res){
    res.send('Output');
})

expapp.get('/api', function(req, res) {
    res.send('output for api');
});
expapp.get('/test1', function(req, res) {
        fs.readFile('./test1.json', function(err, data){
            if(!err){
                res.send(data.toString());
            }
        });
});
server.listen(3003, function() {
    console.log('Server running!')
});