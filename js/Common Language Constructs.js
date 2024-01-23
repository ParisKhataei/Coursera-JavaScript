var string = "Hello";
string += " World";
console.log(string + "!");


console.log (( 5 + 4 ) / 3);
console.log (undefined / 5);
function test1 (a) {
	console.log (a / 4);
}
test1();


var x = 4;
var y = 4;
if (x == y) {
	console.log ("x is equal to y");
}

x ="4";
if( x == y) {
	console.log (" x is equal to y");
}


if ( x === y) {
	console.log ("Strict : x is eaual to y");
}
else {
	console.log ("Strict : x is NOT eaual to y")
}


if ( false || null || undefined || "" || 0 || NaN) {
	console.log ("This line wont execute");
}
else {
	console.log ("ALL FALSE")
}

if ( true && "hello" && 1 && -1 && "false") {
	console.log ("ALL TRUE")
}


function a() 
{
	return 
	{
		name : "Paris"
	};
}

function b() {
	return {
		name : "Paris"
	}
}

console.log(a());
console.log(b());


var sum = 0;
for (var i = 0 ; i < 10 ; i++) {
	console.log(i);
	sum = sum + i;
}
console.log ("sum is going to be: " + sum);