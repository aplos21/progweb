var http = require("http");
var file = require("fs");

var val = file.readdirSync("./past")
var server = http.createServer(function (req, res) {
    res.end(val.join('\n'));
});

server.listen(3000);
