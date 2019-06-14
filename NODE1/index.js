
var vet = [];
var http = require("http");
var file = require("fs");
process.argv.forEach((val, index) => {

 vet.push(val);
})
 console.log(vet[2]);
var val = file.readdirSync("./" + vet[2]);
var server = http.createServer(function (req, res) {
    res.end(val.join('\n'));
});

server.listen(3000);
