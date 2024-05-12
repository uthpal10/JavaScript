// null is a value that you set to represent an intentional absence of value, 
// while undefined is a value that JavaScript assigns to variables or properties that have not been given a value.

//  null is a primitive value of type object, 
//  while undefined is a primitive value of type undefined

// null is explicitly assigned to a variable or object property by the programmer to indicate absence of value, 
// while undefined is automatically assigned by JavaScript to variables and properties that have not been initialized.

let arr = null;
console.log(arr); // null
console.log(typeof(arr)); // object

let abb;
console.log((abb)); // undefined
console.log(typeof(abb)); // undefined
console.log(null === undefined); // false

let sym = Symbol(23);
console.log(typeof(sym)); // Symbol