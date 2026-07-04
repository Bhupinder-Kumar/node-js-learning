const http = require('http');
const port = 5600;

const server = http.createServer((req, res)=> {
    console.log('Method ----->',req.method,  'Url --->', req.url)
    if(req.url == '/'){
        res.write('Home Page');
    } else if(req.url == '/login'){
        res.write('Login Page');
    } else{
        res.write('Others Page')
    }
    res.end();
});

server.listen(port);