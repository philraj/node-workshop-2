var http = require("http");
var request = require("request");

var listener = function (req, response) {
    var start = new Date().getTime();
    while (new Date().getTime() - start < 10000);
    response.writeHead(200);
    response.end("Hello world! Request URL: " + req.url.substring(1));
}

var server = http.createServer(listener);

server.listen(process.env.PORT, process.env.IP);