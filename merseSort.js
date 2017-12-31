function mergeSortedArray(first, second) {
  var merged = [];
  var length = first.length + second.length;
  var j = 0;
  var k = 0;

  for(var i = 0; i < length; i++) {
    if(first[j] < second[k]) {
      merged.push(first[j]);
      j++;
    }
    else {
      merged.push(second[k]);
      k++;
    }
  }
  return merged;
}

console.log(mergeSortedArray([3,5,6,9],[1,2,3,29]));
