// this function will count sentences of a paragraph
function sentenceCount(boktrita) { // here boktrita is perameter, it can be changed time to time
  var count = 0;
  for(var i = 0; i < boktrita.length; i++) {
    if(boktrita[i] == '.') {
      count++;
    }
    // some sentences can end up by ! , so avoiding bug we have made anyother else if condition
    else if (boktrita[i] == '!') {
      count++;
    }
    // some sentences can end up by ? , so avoiding bug we have made anyother else if condition
    else if (boktrita[i] == '?') {
      count++;
    }
  }
  // count++ now you don't need to count++ extra,
  return count;
}

console.log(sentenceCount("agami eid er por andolon hobe. amra ar boshe thakbo na. amader andolon cholbe.")); // now calling the function and put the input replacing perameterof the function
console.log(sentenceCount("It was July 21, 1969 and Neil Armstrong awoke with a start. It was the day he would become the first human being to ever walk on the moon. The journey had begun several days earlier, when on July 16th, the Apollo 11 launched from Earth headed into outer space. On board with Neil Armstrong were Michael Collins and Buzz Aldrin. The crew landed on the moon in the Sea of Tranquility a day before the actual walk. Upon Neil’s first step onto the moon’s surface, he declared, “That’s one small step for man, one giant leap for mankind.” It sure was!"))

// you can visit this website http://countwordsworth.com/sentences , this type of website use the same method you are learning here
// now you can use this function anywhere of your script

// N.B: what will you do if a user put more than one "." "???" "!!!"
// try to solve this problem
