var http = require("http");
var request = require("request");

var APIkey = "AIzaSyCt5Aq18XSSCYAoIm-BunsbMK_E46rJ5U8";
var locationCache = {};

var listener = function (req, response) {
    var userInput = req.url.substring(1);
    
    if (locationCache.hasOwnProperty( userInput )) {
        response.writeHead(200);
        response.end(locationCache[userInput] + "\n(This is cached data)\n Location cache: " + JSON.stringify(locationCache));
    }
    else {
        var URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + userInput + '&key=' + APIkey;
        
        request(URL, function(err, res, body) {
            if (!err && res.statusCode == 200) {
                var location = JSON.parse(body);
                
                if (location.results[0]) {
                    var coords = "Lat: " + location.results[0].geometry.location.lat + "\nLong: " + location.results[0].geometry.location.lng;
                    locationCache[userInput] = coords;
                    
                    response.writeHead(200);
                    response.end(coords + "\n(This is fresh data)\n Location cache: " + JSON.stringify(locationCache));
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
}

var server = http.createServer(listener);
server.listen(process.env.PORT, process.env.IP);