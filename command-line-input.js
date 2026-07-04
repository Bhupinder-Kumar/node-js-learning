const http = require('http');

const agr = process.argv;

const port = agr[2];

const server = http.createServer((req, res) => {
    res.end('Dynamic Server Creation')
});

server.listen(port);