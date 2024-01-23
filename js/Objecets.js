var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Parisa";
company.ceo.favColor = "Pink";
console.log(company);
console.log("Company CEO Name : " 
	+ company.ceo.firstName);

console.log(company["name"]);

company.$stock = 110;
console.log(company);

company["stock of company"] = 110;
console.log(company);

console.log("Stoick price is : " 
	+ company["stock of company"]);

var stockPropName = "Stock of company";
company[stockPropName] = 110;
console.log("Stoick price is : " 
	+ company[stockPropName]);


// Better Way Object Literal 
var facebook = {
	name : "Facebook",
	ceo : {
		firstName : "Paris",
		favColor : "blue"
	},
	// $stock : 110
	"Stock of company" : 110
};

console.log(facebook);

