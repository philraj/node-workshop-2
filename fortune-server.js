var http = require("http");
var request = require("request");
var fortune = require("./library/fortune");

var listener = function (req, response) {
    response.writeHead(200);
    response.end("Here, have a fortune...\n" + fortune.getFortune());
}

var server = http.createServer(listener);

server.listen(process.env.PORT, process.env.IP);