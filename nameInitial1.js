// Youtube tutorial link of this script: https://youtu.be/EG2VEjO3AT0

function getInitials(name) {
  var parts = name.split(' '); // it will spilit the whole string where it will find ' ' that means space, then will save it to the parts
  console.log(parts) // here we can see what the spilit method has done
  var initials = '' // declared a new var to store initials
  for (var i = 0; i < parts.length; i++) { // this for loop will run untill the length of the parts
    if (parts[i].length > 0 && parts[i] != '') {
      initials += parts[i][0].toUpperCase()na
    }
  }
  return initials

}

console.log(getInitials("arafat rakib hasan"))
