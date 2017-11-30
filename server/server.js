var http = require("http");
var fs = require("fs");
var jquery = require("jquery");

function start() {
    http.createServer(function (request, response) {
        response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
        fs.readFile("server/a.txt","UTF-8",function (err,data) {
             response.write(data.toString());
            response.end();
        });
    }).listen(8889);
    console.log("the server has started !")
}
exports.start = start;