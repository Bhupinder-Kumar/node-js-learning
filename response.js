const http = require('http');
const age = 29;
const date = new Date();

const server = http.createServer((req, res)=>{
    res.setHeader("Content-Type", "text/html")
    // res.write("<h1>hello new server created\n </h1>");
    res.write(`
        <html>
            <head>
                <title>Node Js Learning</title>
            </head>
            <body>
                <h1>Hello This is Node Js Response.</h1>
                <h1>age: `+age+`</h1>
                <h2>Date: `+date+`</h1>
            </body>
        </html>
        `)
    // it ends the last request but server is still runing and changes are reflecting
    res.end();

    // it stops the full process and stops the server too.
    // process.end();
})

server.listen(4800);