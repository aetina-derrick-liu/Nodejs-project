var http = require("http");
var url = require("url");

function start(route,handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");        
        route(handle,pathname,response,request);
      }
    http.createServer(onRequest).listen(8888);
    console.log("Server start");
}
function test(foo) {
    console.log(foo);
}
exports.start = start;
exports.test = test;