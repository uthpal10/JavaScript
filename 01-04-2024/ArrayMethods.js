const arr = ['Australia', 'Newzealand', 'India', 'SouthAfrica']
// console.log(arr);

const abb = [20, 37, 41, 10, 25];

// Performs the specified action for each element in an array. returns ==> undefined
abb.forEach( (values, index, arrays) => 
{
    console.log(values+2, index, arrays);
});

// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset
//  from the end of the array. For example, -2 refers to the second to last element of the array.
let res = abb.slice(1);
console.log(res);

const a = [1,2,3]
const b = [4,5,6,[7,8]];
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const c = a.concat(b);
console.log(c);

console.log(abb.reduce( (accumulator, currentvalue) => accumulator + currentvalue ));

// Accumulator (acc): The accumulator accumulates the callback's return values. 
// It is the accumulated value previously returned in the last invocation of the callback, 
// or the initial value if supplied.
// Current Value (cur): The current element being processed in the array.

let modValue = abb.map( ele => ele *2 )
console.log(modValue);

let modValue1 = abb.filter( ele => ele % 2 === 0)
console.log(modValue1);

console.log( abb.sort( (a,b) => (a-b) ) ); // To sort the numbers in ascending order
// console.log(abb[0]); // returns the lowest value in array

console.log(abb.sort((a , b) => (b-a))); // To sort the numbers in descending order
// console.log(abb[0]); // returns the highest value in array

console.log(arr.length); // Gets or sets the length of the array.

console.log(arr.toString()); // Returns a string representation of an array.

console.log(arr.pop()); // Removes the last element from an array and returns it.

console.log(arr.push('England')); // Appends new elements to the end of an array, and returns the 
// new length of the array.

console.log(arr.shift()); // Removes the first element from an array and returns it.

console.log(arr.unshift("India")); // Inserts new elements at the start of an array, and returns the 
// new length of the array.
console.log(arr);

console.log(arr.splice(1, 1, 'Ireland')); // Removes elements from an array and, if necessary, 
// inserts new elements in their place, returning the deleted elements.

console.log(abb.sort()); // Sorts an array in place in ascending order. This method mutates the array and 
// returns a reference to the same array.

console.log(abb.reverse()); // Reverses the elements in an array in place. This method mutates the array and 
// returns a reference to the same array.

console.log(abb.sort().reverse()); // sort aorts the array ele in ascending order and after use 
// reverse to get elements in descending order 