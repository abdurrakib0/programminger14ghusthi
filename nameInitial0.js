// this function will find Initials of a name like "Jhankar Mahbub" Initial = JM

function initial(name) {
  if(name[0] != ' ') {
    console.log(name[0].toUpperCase());
  }
  for(var i = 1; i < name.length; i++) {
    if(name[i] == ' ') {
      console.log(name[i+1].toUpperCase());
    }
  } 
}

initial("arafat rakib hasan uddin");
