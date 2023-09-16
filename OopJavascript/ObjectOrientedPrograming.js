// function Person(name,umur){
//       this.name = name;
//       this.umur = umur;
//       this.sayHello = function (name) {
//             console.log( `Halo ${name} Selamat Pagi`);
//       };
// };

// const ramdhan = new Person('Ramdhan',18);
// ramdhan.sayHello('Ramdhan')
// console.log(ramdhan)

/* Constructor Inheritance */

// function Employee(firstName){
//       this.firstName = firstName;
//       this.sayHello = function (name) {
//             console.info(`hi ${name}, my name is ${this.firstName}`)
//       }
// }

// function Manager(firstName, lastName) {
// 	this.lastName = lastName;
// 	Employee.call(this,firstName)
// }
// const eko = new Manager('Muhammad','ramdhan');
// console.log(eko)

/* Prototype Inheritance */
function Employee(name) {
	this.name = name;
}
function Manager(name) {
	this.name;
}

// Manager.prototype = Employee.prototype; /* salah */
Manager.prototype = Object.create(Employee.prototype); /* Benar */

Manager.prototype.sayHello = function (name) {
	console.info(`Hello ${name}, my name is Manager ${this.name}`)
}
Employee.prototype.sayHello = function (name) {
	console.info(`Hello ${name} my name is Employee ${this.name}`)
}

const employee = new Employee('Budi');
const manager = new  Manager('Eko');

console.log(employee);
console.log(manager);
