var http = require('http');

const hostName = '127.0.0.1';
const port = 5000;

http.createServer((req,res) => {
    res.writeHead(200,{'ContentType':'text/plain'})
    res.end("Hello World!");
}).listen(port,hostName,() => {
    console.log(`Server is running at http://${hostName}:${port}`)
});