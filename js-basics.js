// JavaScript Document

console.clear();

//this is a single line comment looking for love

/*
	This is a multi-line block of code that has got love
*/

//mutable variables (the values can change)
var dontUseTheseAnymore = true;
let useThisInstead = true;

//non mutable variables or constants (the values can not change)
const useTheseAsMuchAsPossible = true;
try{
useTheseAsMuchAsPossible = true;	
} catch(e){
	console.log(e.toString());
}

console.log("Hello World");

//Arrays

/*var arr = new Array();
arr.push(1,2,3,4,5);
console.log(arr);*/

const arr = [1,2,3,4,5]; //this is an array literal  
console.log(arr);
try{
	arr= nav; 
} catch(e){
	console.error(e.toString());
}
arr[2]= 7;
console.log(arr);

//this is an object literal 
const obj = {
	name:'Nav',
	age: 20,
	dob: '07-12-1999'
};
console.log(obj.name);


let direction;

//this is controlled structure
if(obj.age > 18) {
		direction = "down";
	}
 else{
	direction = "up";
}
console.log(`Its all ${direction} hill from here`);

console.log(`
	hello dave
	how you doing today
`);

switch (direction) {
		case 'up':
		console.log("go get em!!!");
		break;
	default: 
		console.log("you better rest");  
} 

switch (true) {
		case 5<7 :
		console.log("yep");
		break;  
} 

//loops (for, for of, for in)

for (let i =1; i<=10; i++){
	console.log(i);
}
	
for (let item of ['a','b','c']){
	console.log(item);
}

for (let key in obj){
	console.log(key);
	console.log(obj[key]);
}

