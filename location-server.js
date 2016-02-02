var http = require("http");
var request = require("request");
var fortune = require("./library/fortune");

var APIkey = "AIzaSyCt5Aq18XSSCYAoIm-BunsbMK_E46rJ5U8";

var listener = function (req, response) {
    var URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + req.url.substring(1) + '&key=' + APIkey;
    
    request(URL, function(err, res, body) {
        if (!err && res.statusCode == 200) {
            var location = JSON.parse(body);
            
            if (location.results[0]) {
                var coords = "Lat: " + location.results[0].geometry.location.lat + "\nLong: " + location.results[0].geometry.location.lng;
                response.writeHead(200);
                response.end(coords);
            }
            else {
                response.writeHead(200);
                response.end("Please enter a location in the URL!");
            }

        }
        else {
            response.writeHead(200);
            response.end("Something went wrong! Try again later.");
        }
    });
}

var server = http.createServer(listener);

server.listen(process.env.PORT, process.env.IP);