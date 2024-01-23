function orderChikenWith (sideDish) {
	// if ( sideDish === undefined) {
	// 	sideDish = "whatever";
	// }
	sideDish = sideDish || "Whatever";
	console.log ( "Chiken With " + sideDish);
}

orderChikenWith("noodles");
orderChikenWith();

var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}