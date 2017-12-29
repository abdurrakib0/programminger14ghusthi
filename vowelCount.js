// this function will count all the vowels of a sentence or word
function vowelCount(vowel) { // here boktrita is perameter, it can be changed time to time
  var count = 0;
  for(var i = 0; i < vowel.length; i++) {
    // if the i th element is a,e,i,o,u (one of these 5) then we will count it as vowel otherwise we will sjip the for loop
    if(vowel[i] == 'a' || vowel[i] == 'e' || vowel[i] == 'i' || vowel[i] == 'o' || vowel[i] == 'u') {
      count++;
    }
  }
  return count;
}

console.log(vowelCount("agami eid er por andolon hobe")); // now calling the function and put the input replacing perameterof the function
// now you can use this function anywhere of your script

// N.B: please try to find how many consonant in a sentence
