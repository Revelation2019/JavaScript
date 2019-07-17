const http = require("http");


let server = http.createServer(function (req,res) {
    console.log(req.body);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("server is working");
});


server.listen(8888,"127.0.0.1");
console.log("server is running");