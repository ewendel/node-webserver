var express = require("express");
var fs = require('fs');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.bodyParser());

app.get('/', function(req, res) {
	fs.readFile(__dirname + '/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + "/"));
  app.use(express.errorHandler({
	dumpExceptions: true, 
	showStack: true
  }));
  app.use(app.router);
});

app.listen(port);
console.log('Server running on port', port, '...');


