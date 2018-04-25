let http = require('http'); 
  
http.createServer(function(req, res) { 
 res.writeHead(200, {'Content-Type':'text/plain'}); 
 res.end('Hello World!\n'); 
}).listen(3000, '127.0.0.1'); 
  
console.log('A web server is running and listening to a port 3000(8124)'); 