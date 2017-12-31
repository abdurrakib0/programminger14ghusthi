// this function will find fibonacci using recursive function means recursion

function fibonacci(n) {
  if(n <= 1) { // cause we know that fibonacci sereis starts with 0 and 1
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2); // recursive function, calling same function inside the function
}

console.log(fibonacci(10));
