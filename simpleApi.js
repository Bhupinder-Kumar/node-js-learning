const http = require('http');
const port = 4400;

const userData = [
    {
        name: 'john',
        age: 20,
        email: 'john@cool.com'
    },
    {
        name: 'Sam',
        age: 30,
        email: 'sam@cool.com'
    },
    {
        name: 'Albert',
        age: 20,
        email: 'albert@cool.com'
    },
]

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.write(JSON.stringify(userData));
    res.end();
});

server.listen(port);