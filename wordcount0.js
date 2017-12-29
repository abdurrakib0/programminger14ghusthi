// this function will count words of a sentence or string
function wordCount(boktrita) { // here boktrita is perameter, it can be changed time to time
  var count = 0;
  for(var i = 0; i < boktrita.length; i++) {
    if(boktrita[i] == ' ') {
      count++;
    }
  }
  count++;
  return count;
}

console.log(wordCount("agami eid er por andolon hobe")); // now calling the function and put the input replacing perameterof the function
// now you can use this function anywhere of your script
