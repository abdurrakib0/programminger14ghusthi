// this function will reverse any words or sentence
function reverse(word) {
  var reverseWord = ""; // an empty string to store final reverse
  for(var i = word.length - 1; i >= 0; i--) { // i-- cause now we will start our loop from the length and go untill zero
    var letter = word[i]; // store courent i th charecter or letter in new var letter
    reverseWord = reverseWord + letter; // now adding all the reverse letter to the new reverseWord string
  }
  return reverseWord; // every time call the reverse function it will return final reverse output
}

console.log(reverse("jhankar mahbub")); // testing a word
console.log("ami faisa gesi mainkar chipai"); // testing a sentence
