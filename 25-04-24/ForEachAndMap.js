// The map() and forEach() methods are both used in JavaScript to iterate over elements in an array,

// The forEach() method is used to execute a provided function once for each array element.
// It does not create a new array; instead, it modifies the original array in place.
// The return value of forEach() is always undefined.

let arr = [1,2,3,4]
let res = arr.forEach( num => console.log(num*2));
console.log("output: "+ res); // return type is undefined

// The map() method is used to create a new array by applying a function to each element in the original array.
// It returns a new array with the results of applying the provided function to each element.
// The original array remains unchanged.

let abb = [2,4,6,8]
let result = abb.map( ele => ele*2 )
console.log(result); // returns new array with modified results

// Return Value:
// forEach() returns undefined and does not create a new array.
// map() returns a new array with the results of applying the provided function to each element.

// Modifying Original Array:
// forEach() modifies the original array in place; it doesn't create a new array.
// map() does not modify the original array; it creates and returns a new array.

// Usage:
// Use forEach() when you want to perform an action on each element of an array without creating a new array.
// Use map() when you want to transform each element of an array and create a new array with the transformed values.