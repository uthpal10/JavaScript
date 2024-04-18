let arr = [(-4.1), (3.3), null, "Hello", (2-3), 32]
arr.forEach( ele => { console.log( Math.abs(ele) ) }) 
// Returns the absolute value of a number (Value without regards to whether it is +ve or -ve)

let abb = [4, 16, 36, 9, 81, 25]
abb.forEach( ele => { console.log( Math.sqrt(ele) ) }) // Returns the square root of a number.

let acc = [8, 27, 64, 729, 216, 125]
acc.forEach( ele => { console.log( Math.cbrt(ele) ); }) // Returns the square root of a number.

let num = 7.7;

console.log(Math.random()); // Returns a pseudo-random number between 0 and 1.

console.log(Math.floor(num)); // Returns the greatest integer less than or equal to its numeric argument.

console.log(Math.ceil(num)); // Returns the smallest integer greater than or equal to its numeric argument.

console.log(Math.trunc(num)); 
// Returns the integral part of the a numeric expression, x, removing any fractional digits. 

console.log(Math.round(num)); // Returns a supplied numeric expression rounded to the nearest integer.