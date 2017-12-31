// this function will find fibonacci using recursive function means recursion

function fibonacci(n) {
  if(n <= 1) { // cause we know that fibonacci series starts with 0 and 1
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2); // recursive function, calling same function inside the function
}

// by this program we can print fibonacci series till a range

var range = 10; // we want to print fibonacci series till 10
for(var i = 0; i <= range; i++) { // we also want to print the last range fibonacci number so we shoulf use <=
  console.log(fibonacci(i)); // printing each fibonacci number, each foor loop
}
