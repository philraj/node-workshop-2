var http = require("http");
var request = require("request");

var listener = function (req, response) {
    response.end(req.url);
}

var server = http.createServer(listener);

server.listen(process.env.PORT, process.env.IP);