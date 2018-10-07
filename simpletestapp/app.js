console.log('Hello World');
function greeting(greet){
console.log('Hello ' + greet);
}

greeting('Bharath');

const http = require('http');
const testController = require('./controllers/controller.test');
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
console.log('HERE IS WHAT IS BEING IMPORTED INTO APP.JS');
console.log('==========================================');
console.log(testController);
console.log('==========================================');
testController.person.printname(testController.person.firstname,testController.person['lastname']);
console.log('Here is your Age: ' + testController.person.age);

testController.danny.greetjob();
testController.bobby.greetjob();
console.log('Prototypes of bobby & danny are: ');
console.log(testController.danny.__proto__ === testController.bobby.__proto__);


const greet = require('./greet');
greet.english();
greet.spanish();
