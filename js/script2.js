(function (window) {
var mohammadGreeter = {};
mohammadGreeter.name = "Mohammad";
var greeting = "Hi ";
mohammadGreeter.sayHi = function () {
	console.log(greeting + mohammadGreeter.name);
}

	window.mohammadGreeter = mohammadGreeter;	

})(window)

(function () {
	var myobj = {};
	myobj.name = "parisa"
	var salam = "Hi"
	myobj.myfunc = function() {
		console.log(salam + myobj.name);
	}

	window.myobj = myobj;
})(window);