// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.greet = () => {
	console.log(`Hello, my name is ${name}, I am ${age} years old.`)
}

function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
	this.jobTittle = jobTitle;
}

Employee.prototype = Document.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = () => {
	console.log(`Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}`);
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
