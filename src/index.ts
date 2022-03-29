const instanceOf = require('./hand/instanceOf');

// const prototype1 = {};
// const object1 = Object.create(prototype1);

// console.log(instanceOf(prototype1,object1))

function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(instanceOf(auto, Car));

// console.log(auto instanceof Car);
// expected output: true
