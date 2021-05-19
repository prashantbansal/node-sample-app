const http = require('http'); //adding global module
//const http = require('./http'); //adding local file, if needed
const https = require('https');

// function requestListener(req, res){

// }

// http.createServer(function(req, res){

// });

const server = http.createServer((req, res) => {
 console.log(req);
});

server.listen(3001);