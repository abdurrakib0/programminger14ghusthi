// sum of digits is an interesting problem of recursion,
// sum of digits means input 45 output 9 more specifically 4+5 = 9
function sum_of_digit(n) // n is a perameter that represents a number
{
    if (n == 0) // if the number is 0 then it won't have any sum.
       return 0; // so program will return 0
    else return (Math.floor(n % 10) + Math.floor(sum_of_digit(n / 10)));

    // let's discuss Math.floor(), it's a built-in javascript function, it rounds the float number, means 4.22352, it will be rounded to 4, less than .5 will be current number and greater than .5 will be the next number.
    // 4.58928 will be 5 and 4.214588 will be 4
}

console.log(sum_of_digit(45));
