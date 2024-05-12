// The "for of" and "for in" loops are both used in JavaScript for iteration.
// for...of loop:
// Introduced in ES6, this loop is specifically designed for iterating over
//  iterable objects such as arrays, strings, maps, sets, etc.
const array = [1, 2, 3, 4, 5];
for (const element of array) 
{
  console.log(element);
}

// for...in loop:
// This loop is used to iterate over the enumerable properties of an object.
const object = { a: 1, b: 2, c: 3 };
for (const key in object) 
{
  console.log(key + " ==> " + object[key]);
}

// Use for...of when you want to iterate over elements in an iterable like an array.
// Use for...in when you want to iterate over properties of an object (enumerable properties).
