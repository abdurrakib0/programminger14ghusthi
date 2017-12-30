// this is a sample array of names
var names = ["pitu", "ritu", "jitu", "situ", "mitu", "nitu", "bitu", "jitu", "jitu", "bitu", "situ", "litu", "gitu", "litu"];

// first we are printing, how many names are there before removing duplicate.
console.log("main array size: ", names.length); // .length is a method of printing length of any array

function removeDuplicate(names) { // names is a sample parameter, it can be changed
  var output = []; // final output,an empty array, where we will store names after removing duplicate

  for(var i = 0; i < names.length; i++) {
    var name = names[i]; // to store the current name of the names array, we take a new varribale
    if(output.indexOf(name) == -1) { // if the current name is not included before in the final output list, then we will push that means will add it to output array
      output.push(name);
    }
  }
  return output;
}

var newList = removeDuplicate(names); // for calculating the array we take another var to store the new array after removingduplicate

console.log(newList); // firstprint the new array after removing duplicate
console.log("after removing duplicate, now array size: ", newList.length); // new array size print
console.log("so, there are ", ((names.length) - (newList.length)), "duplicate names."); // how many duplicate was in the main names array


// this program will also removeDuplicate number from an array of numbers, please try it yourself.
