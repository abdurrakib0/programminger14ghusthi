// this function will reverse any words or sentence
function reverse(word) {
  var reverseWord = ""; // an empty string to store final reverse
  for(var i = word.length - 1; i >= 0; i--) { // i-- cause now we will start our loop from the length and go untill zero
    var letter = word[i]; // store courent i th charecter or letter in new var letter
    reverseWord = reverseWord + letter; // now adding all the reverse letter to the new reverseWord string
  }
  return reverseWord; // every time call the reverse function it will return final reverse output
}

// this function will check, whether the input is palindromeor not.
function isPalindrome(input) {
  var reverseWord = reverse(input); // called reversefunction from previous program we wrote then sotring the reverse input to a new varribale
  if(input == reverseWord) { // if the input and the reverse of the input is true then it will return true otherwise false
    return true;
  }
  else return false;
}
// N.B: in the return you can also print something like, this is a palindromeor not, try it yourself please.

console.log(isPalindrome('medium')); // the word isn't palindrome so it will return false.
console.log(isPalindrome('eye')); // the word is palindromeso it will return false.
