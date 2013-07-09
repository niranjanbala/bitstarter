var express = require('express');
var fs=require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
/*	var options={
		flags: 'r',
		encoding: 'utf8',
		fd: null,
		mode: 0666,
		autoClose: true
	};*/
	fs.readFileSync('index.html','utf8',function(err,data){
		if (err) throw err;
		console.log('hello');
		console.log(data);
		response.send("world");
		//response.send(new Buffer(data).toString());
	});
	response.send("Hello");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
