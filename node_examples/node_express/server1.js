/**
 * Created by CeShang on 2016/3/18.
 */
var express = require('../node_modules/express'),
    http = require('http');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(function(req,res,next){
    console.log(req.headers);

    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<html><body><h1>Hello World</h1></body>');
});

var server = http.createServer(app);

server.listen(port, hostname, function(){
    console.log('Server running at http://${localhost}:${port}/');
});