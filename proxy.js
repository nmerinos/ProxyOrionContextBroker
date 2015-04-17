var express = require('express'),
    errorHandler = require('errorhandler'),
    url = require('url'),
	http = require('http'),
	path = require('path'),
	request = require('request');
var app = express();
	app.set('port', process.env.PORT || 3123);
	if ('development' == app.get('env')) {
	  app.use(errorHandler());
	}

var proxyCounter = 0;

//function notFound(res){
	//res.writeHead(404, "text/plain");
	//res.end("404: File not found");
//};
	app.all('/proxy/?*', function(req, res) {
	//Parse the request's url
	var b_url = url.parse(req.url,true);
	//if(!b_url.query || !b_url.query.url) return notFound(req);

	//Read and parse the url parameter (/?url=p_url)
	var p_url = url.parse(b_url.query.url);

	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,PUT,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With,X-Test-Header,X-Auth-Token,Authorization,Content-Type,X-Authorization,SOAPAction');
	//res.header('Access-Control-Expose-Headers', 'SForce-Limit-Info');
if (req.method === 'OPTIONS') {
	res.end();
	return;
	}

	
	//var contentType = "application/x-www-form-urlencoded";
	var params = {
	url: p_url || "http://130.206.83.193:1026/NGSI10/updateContext",
	method: req.method,
	headers: {
	"Content-Type": "application/xml",
        "Accept": "application/xml",
	"X-Auth-Token": req.headers["X-Auth-Token"],
	"X-Test-Header": req.headers["X-Test-Header"],
	"X-Requested-With": req.headers["X-Requested-With"]
	}
	};
	proxyCounter++;
	//console.log("(++req++) " + new Array(proxyCounter+1).join('*'));
	//console.log("method=" + params.method + ", url=" + params.url);
	req.pipe(request(params))
	.on('response', function() {
	proxyCounter--;
	console.log("(--res--) " + new Array(proxyCounter+1).join('*'));
	})
	.on('error', function() {
	proxyCounter--;
	console.log("(--err--) " + new Array(proxyCounter+1).join('*'));
	})
	.pipe(res);
	});
	app.get('/', function(req, res) {
	res.send('AJAX Proxy');
	});
	http.createServer(app).listen(3000);
	
