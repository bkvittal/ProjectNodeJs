console.log('Hello World');
function greeting(greet){
console.log('Hello ' + greet);
}

greeting('Bharath');

const http = require('http');

const port = '3000';
const hostname = '127.0.0.1'

const server = http.createServer((req,res) => {
  
res.statusCode = 200;
res.setHeader('Content-type','text/plain');
res.end('Hello World');
});

server.listen(port,hostname, () => {
 console.log('server connected on port ' + port);
});
