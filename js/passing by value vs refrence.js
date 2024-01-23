// Passing by value
var a = 7;
var b = a;
console.log("a : " + a);
console.log("b : " + b);

b= 5;
console.log("After updating b");
console.log("a : " + a);
console.log("b : " + b);


// Passing by refrence
var a = { x : 78};
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("After updating b.x");
console.log(a);
console.log(b);

// Passing by refrence vs value in function
function x (a) {
  	console.log("in x...");
  	console.log("before:");
  	console.log(a);

  	a = 4;
  	console.log("after");
  	console.log("a is: " + a);
}
var value = 76;
x(value);
console.log("value is: " + value);


function changeObject(obj) {
	console.log("Before obj is: ") 
	console.log(obj);

	obj.x = 6;
	console.log("after obj change: ")
	console.log(obj);
}
var val = {x : 799};
changeObject(val)
console.log("the original value after : ")
console.log(val);

var u = 5 ;
var p = u;
 u = 10;
 console.log(p);
