var express = require("express");
//var app     = express();
var path    = require("path");
var fs = require('fs');
 var https = require('https');
//var bodyParser = require('body-parser');
//app.use(bodyParser.json());
//app.use(bodyParser());

//app.use(express.static(__dirname + '/lib'));

var opts = {
  key: fs.readFileSync('certs/ce3ce775-eea8-47e5-9624-3886d9154803.private.pem'),
  cert: fs.readFileSync('certs/ce3ce775-eea8-47e5-9624-3886d9154803.public.pem')
  //ca: fs.readFileSync('certs/cfb0eb25-d421-4d69-83fa-7d992bbc13bb.public.pem')
  //requestCert: true,
  //rejectUnauthorized: true
}; 

/*var opts={
  key: fs.readFile('certs/cfb0eb25-d421-4d69-83fa-7d992bbc13bb.private.pem', function(err, data) {
  if (err) throw err;
  console.log('key');
}),
  cert: fs.readFile('certs/cfb0eb25-d421-4d69-83fa-7d992bbc13bb.public.pem', function(err, data) {
  if (err) throw err;
  console.log("cert");
})
};*/




var app = express(opts);
//var app = express();
app.use('/appserver', express.static('lib'));

app.get('/',function(req,res){
  //res.sendfile('public/index.html');
  console.log('app server get***');
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.post('/',function(req,res){
  //res.sendfile('public/index.html');
  console.log('app server post***');
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});

/*var server = https.createServer(opts,function(req, res) {
  res.writeHead(200);
  res.end('Hello Https\r\n');
});*/
//server.listen(80);

https.createServer(opts, app).listen(443);


//app.listen(80);

//console.log("Running at Port 80");