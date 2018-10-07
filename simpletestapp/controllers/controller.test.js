var person = {
    firstname: 'John',
    lastname: 'Doe',
    printname: function(firstname, lastname){
        console.log('Hello, ' + lastname + ', ' + firstname);
    },
    age: 36
};

module.exports.person = person;

var personaddress = {
    streename: '1 main st',
    city: 'chicago',
    state: 'IL',
    printaddress: function(streetname, city, state){
        console.log('Hello, ' + streetname + ', ' + city+ ', ' + state+ ', ');
    },
    zipcode: 60606
};

module.exports.address = personaddress;

function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greetjob = function(){
    console.log('From Prototype of Person');
    console.log('Hello, ' + this.lastname + ',' + this.firstname);
}

var danny = new Person('Daniel', 'Ruth');
var bobby = new Person('Robert', 'Ruth');

module.exports.danny = danny;
module.exports.bobby = bobby;