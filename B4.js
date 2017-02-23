"use strict";
(() =>{
	outage = 20;
	var height = 170;
	if(outage == 20)height = 180;
	console.log(`height =  ${height}`);
})();
console.log(`outAge = ${outage}`);
console.log(`height = ${height}`);//bug


var a = 5,b = 10;
if(a === 5){
	let a =4;//The scope is inside the if-block 
	var b =1;//The scope is inside the function

	console.log(a);//must be 4
	console.log(b);//must be 1
}

console.log(a);//must be 5
console.log(b);//must be 1

//使用let必須宣告嚴格模式