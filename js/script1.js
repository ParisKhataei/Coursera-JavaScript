(function (window) {
var parisaGreeter = {}; //creating an object to nameSpace 
parisaGreeter.name = "Parisa";
var greeting = "Hello ";
parisaGreeter.sayHello = function () {
	console.log(greeting + parisaGreeter.name);
}
	window.parisaGreeter = parisaGreeter;
})(window)