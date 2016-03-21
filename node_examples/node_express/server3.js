/**
 * Created by CeShang on 2016/3/18.
 */
var express = require('../node_modules/express');
var morgan = require('../node_modules/morgan');
var bodyParser = require('../node_modules/body-parser');;

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

/* '/dishes' methods:get post delete */

app.all('/dishes',function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
});

app.get('/dishes',function(req,res,next){
    res.end('Will send all the dishes to you!');
});

app.post('/dishes',function(req,res,next){
    res.end('Will add the dish: ' + req.body.name + ' with details: '
        + req.body.description);
});

app.delete('/dishes', function(req, res, next){
    res.end('Deleting all dishes');
});

/* 'dishes/:dishId' methods: get put delete */
app.get('/dishes/:dishId',function(req,res,next){
    res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
});

app.delete('/dishes/:dishId', function(req, res, next){
    res.end('Deleting dish: ' + req.params.dishId);
});

app.put('/dishes/:dishId',function(req,res,next){
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name +
        ' with details: ' + req.body.description);
});

app.use(express.static(__dirname+'/public'));

app.listen(port, hostname, function(){
    console.log('Server running at http://${localhost}:${port}/');
});