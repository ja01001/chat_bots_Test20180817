var express = require('express');

var http = require('http');
var app = express();
app.get('/keyboard',function(req,res){

    var  data = {
        'type' : 'button',
        'button' : ['test1','test2','test3']
    };
    res.json(data);
});

http.createServer(app).listen(9090,function(){
    console.log("running server!");
})
