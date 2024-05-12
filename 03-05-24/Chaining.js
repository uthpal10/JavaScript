// Chaining is the one of the best practice method for create multiple methods depends on one on another. 
// same like array methods. It looks clean and readable

// Chaining in JavaScript refers to the practice of calling multiple methods on an object one after another in a 
// single line of code. This is possible because many methods in JavaScript return the object itself, allowing you 
// to continue calling methods on the result of the previous method call

let myArray = [1, 2, 3, 4, 5];

// Chaining array methods
let result = myArray
  .map(num => num * 2)  // Doubles each element
  .filter(num => num > 5)  // Filters out elements less than or equal to 5
  .reduce((acc, curr) => acc + curr);  // Sums up the remaining elements

console.log(result);  // Output: 24
