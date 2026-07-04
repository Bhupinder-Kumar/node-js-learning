const http = require('http');
const port = 4200;
const port2 = 5200;

const server = http.createServer((req, res)=>{
    res.write('<h1>hello new server created\n </h1>');
    res.end('<p>Hello World\n<p>');
});

server.listen(port);


// const server2 = http.createServer((req, res)=>{
//     res.write('<h1>hello Second server created\n </h1>');
//     res.end('<p>Hello World\n<p>');
// });

// server2.listen(port2);