// this function will output in decending order means bigger number to lower,
// cause we write console before calling the recursive function.
function writeNumber(number) {
  if(number == 0) {
    return;
  }
  console.log(number);
  writeNumber(number - 1);  // recursivefunction
}

writeNumber(8)

// this function will output in ascending order means lower number to bigger,
// cause we write console after calling the recursive function.
function writeNumber(number) {
  if(number == 0) {
    return;
  }
  writeNumber(number - 1);  // recursivefunction
  console.log(number);
}

writeNumber(8)
