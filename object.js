// N.B: Youtube tutorial link of this code - https://youtu.be/pwbgdJenb4o

// object model, that's the power of an OOP language
function goruDetails(price, nationality, isTablet, name) { // in the bracket put all the argument you need in a object model
  this.price = price
  this.nationality = nationality
  this.isTablet = isTablet
  this.name = name
  }

var goru1 = new goruDetails(9000, "desi", false);
var goru2 = new goruDetails(10000, "indain", true, "bolod");

console.log(goru1); // full details
console.log(goru2);
console.log("price:",goru1.price); //read single property
console.log("nationality:",goru2.nationality);
