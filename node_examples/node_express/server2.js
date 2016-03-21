/**
 * Created by CeShang on 2016/3/18.
 */
var express = require('../node_modules/express');
var morgan = require('../node_modules/morgan');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));

app.listen(port, hostname, function(){
    console.log('Server running at http://${localhost}:${port}/');
});