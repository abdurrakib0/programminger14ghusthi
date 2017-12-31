// N.B: Youtube tutorial link of this code - https://youtu.be/pwbgdJenb4o

var gorus = [
{ price: 9000, nationality: "desi", isTablet: false },
{ price: 160000, nationality: "desi", isTablet: false },
{ price: 69000, nationality: "india", isTablet: true },
{ price: 170000, nationality: "australia", isTablet: false },
{ price: 45000, nationality: "desi", isTablet: true },
{ price: 85000, nationality: "india", isTablet: true },
{ price: 135000, nationality: "australia", isTablet: true }
];

var selectedGorus = [];
for(var i = 0; i < gorus.length; i++) {
  var goru = gorus[i];
  if(goru.price > 1500 && goru.isTablet == true) { // if you give 150000 as book, you won't get any output.
    selectedGorus.push(goru);
  }
}

console.log(selectedGorus);
