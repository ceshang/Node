/**
 * Created by CeShang on 2016/3/18.
 */

var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 4000;

var server = http.createServer(function(req,res){
    console.log('Request for ' + req.url + ' by method ' + req.method);

    if(req.method == 'GET'){
        var fileUrl;
        if(req.url == '/')
            fileUrl = '/index.html';
        else
            fileUrl = req.url;

        var filePath = path.resolve('./public'+fileUrl);
        var fileExt = path.extname(filePath);

        //only allowed to fetch html files
        if(fileExt == '.html'){
            fs.exists(filePath,function(exists){
                if(!exists){
                    res.writeHead(404,{'Content-Type':'text/html'});
                    res.end('<html><body><h1>Error 404: '+ fileUrl + ' not found</h1></body></html>');
                    return;
                }

                res.writeHead(200,{'Content-Type':'text/html'});
                fs.createReadStream(filePath).pipe(res);
            });
        }//end if(fileExt=='.html')
        else{
            res.writeHead(404,{'Content-Type':'text/html'});
            res.end('<html><body><h1>Error 404: ' + req.method + ' file extension not supported</h1></body></html>');
        }
    }//end if(req.method=='GET')
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end('<html><body><h1>Error 404: '+req.method+' method not supported</h1></body>');
    }
});

server.listen(port,hostname, function(){
    console.log('Server running at http://$(hostname):${port}/');
});