// TypeScript offers all of Javascripts features. With typescripts type system as an additional layer on top.

let sayHi = 'Hi!'
let sayHi2: string = 'Hiiii!'
//  sayHi2 assigns a type of string to the variable. Making it statically typed.

// Defining types
// An objects shape can be explicitly defined using an interface declaration
interface User {
	name: string;
	age: number
}

const user: User = {
	name: 'Emmanuel',
	age: 22,
};

// Typescript throws an error if the object dosent match the shape of the object interface provided.

// For example
// const user2: User = {
// 	name: 'Emmanuel',
// 	age: 'twenty two'
// }

// This throws an error

// Interface declartaion can be used with classes too.
interface CarInterface {
	brand: string;
	model: string;
	year: number;
}

class CarType {
	brand: string;
	model: string;
	year: number;

	constructor(brand: string, model: string, year: number) {
		this.brand = brand;
		this.model = model;
		this.year = year;
	}
}

const newcar: CarInterface = new CarType('Mercedes Benz', 'E Class', 2012);

// Interfaces can be used to a