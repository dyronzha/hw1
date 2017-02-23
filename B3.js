// function statement
function greet() {
	console.log('hi');
}
greet();

// function expression
var greetMe = function() {
	console.log('Hi Tony!');
}
greetMe();

//arrow function expression
greetID = () => console.log(`Hi Yuxing!`);
greetID();

//arrow function expression with parameters
greetFirst = name =>console.log(`Hi ${name} !`);
greetFirst(`Lin`);
