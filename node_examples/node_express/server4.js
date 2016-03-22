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

var dishRouter = express.Router();

dishRouter.use(bodyParser.json());

/* 'dishes' methods: get post delete */
dishRouter.route('/')
    .all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
    })
    .get(function(req,res,next){
    res.end('Will send all the dishes to you!');
})
    .post(function(req,res,next){
    res.end('Will add the dish: ' + req.body.name + ' with details: '
        + req.body.description);
})
    .delete(function(req, res, next){
    res.end('Deleting all dishes');
});

/* 'dishes/:dishId' methods: get put delete */
dishRouter.route('/:dishId')
    .all(function(req,res,next){
        res.writeHead(200,{'Content-Type':'text/plain'});
        next();
    })
    .get(function(req,res,next){
    res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
    })
    .delete(function(req, res, next){
    res.end('Deleting dish: ' + req.params.dishId);
    })
    .put(function(req,res,next){
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name +
        ' with details: ' + req.body.description);
});

app.use('/dishes',dishRouter);

app.use(express.static(__dirname+'/public'));

app.listen(port, hostname, function(){
    console.log('Server running at http://${localhost}:${port}/');
