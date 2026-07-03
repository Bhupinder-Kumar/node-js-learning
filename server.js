const http = require('http');
http.createServer((req, res)=>{
    res.write('<h1>hello new server created\n </h1>');
    res.end('<p>Hello World\n<p>');

}).listen(4200);