var http = require("http");
var request = require("request");

var APIkey = "cb5a3e46c433aaf7fe63c4b240e1ef10";

var listener = function (req, response) {
    var URL = 'http://words.bighugelabs.com/api/2/' + APIkey + req.url + '/json';
    
    request(URL, function(err, res, body) {
        if (!err && res.statusCode == 200) {
            var body = JSON.parse(body);
            
            if (body.noun) {
                var responseString = "NOUNS\n=====\n";
                
                body.noun.syn.forEach( function (word) {
                    responseString += word + "\n"; 
                });
            }
            
            if (body.verb) {
                responseString += "\nVERBS\n=====\n";
                
                body.verb.syn.forEach( function (word) {
                    responseString += word + "\n"; 
                });            
            }
            response.writeHead(200);
            response.end(responseString);
        }
        else {
            response.writeHead(200);
            response.end("Something went wrong! Try again later.");
        }
    });
}

var server = http.createServer(listener);
server.listen(process.env.PORT, process.env.IP);