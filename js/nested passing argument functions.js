function x (a , b) {
	return a * b;
}
console.log(x(2 , 4));

//set other property to function
x.version = "v.1.0.0";
console.log(x);
console.log(x.toString());
console.log(x.version);


function x (s){
	var myFunc(y){
		return s * y;
	};
	return myFunc;
}
var t = x(4);
console.log(t(10));

// passing function as arguments
function t (x , operation) {
	return operation(x);
}
var result = t(5 , t);
console.log(result);