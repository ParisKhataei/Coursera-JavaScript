// Array

var array = new Array();
array[0] = "Parisa";
array[1] = 2;
array[2] = function(name){
	console.log("hello " + name);
};
array[3] = {course : "HTML, CSS & JS"};

console.log(array);
console.log(array[1]);
array[2]("Mohammad");
array[2](array[0]);
console.log(array[3].course);

//short hand array creation
var names = ["Yaakov", "John", "Joe"];
console.log(names);

for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

names[100] = "Jim";
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}


var myObj = {
	name: "Paris",
	course: "HTML/CSS/JS",
	platform: "Coursera"
};
for (var prop in myObj) {
	console.log(prop + " : " + myObj[prop]);
}

var names2 = ["Yaakov", "John", "Joe"];
for(var name in names2) {
	console.log("Hello " + names2[name])
} 

names2.greeting = "Hi ";
for(var name in names2) {
	console.log("Hello " + names2[name])
}

var counter = 0;
var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(myArray[i]);
console.log(counter);