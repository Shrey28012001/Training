

var http = require('http');

/*

http.createServer(function(req,res){
    res.write('Hello World');
    res.end();

}).listen(4000);

*/

// With sattus code

/*
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('Kem Chho ?');
    res.end();
}).listen(3000);

*/

// To take url
/*
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(3000);
*/

// split URL




const url = require('url');

/*
http.createServer(function(req,res){
    res.writeHead(200,{'Content_Type' : 'text/html'});
    var q = url.parse(req.url,true).query;
    var txt = q.year + " " + q.month;

    res.end(txt)
}).listen(8080);

*/

var alink = 'http://localhost:8080/default.htm?year=2017&month=february';

let q = url.parse(alink,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.auth);
console.log(q.search);
console.log(q.query);
console.log(q.slashes);
console.log(q.port);
console.log(q.path);
console.log(q.protocol);
console.log(q.href);
console.log(q.hash);
