const arr = ['Australia', 'Newzealand', 'India', 'SouthAfrica']
// console.log(arr);

const abb = [20, 30, 40, 10, 25];

// abb.map( () =>
// {console.log((abb*2))
// })

// console.log(abb.sort((a , b) => (a-b))); // To sort the numbers in ascending order
// console.log(abb[0]); // returns the lowest value in array

// console.log(abb.sort((a , b) => (b-a))); // To sort the numbers in descending order
// console.log(abb[0]); // returns the highest value in array

console.log(arr.length); // Gets or sets the length of the array.

console.log(arr.toString()); // Returns a string representation of an array.

console.log(arr.pop()); // Removes the last element from an array and returns it.

console.log(arr.push('England')); // Appends new elements to the end of an array, and returns the new length of the array.

console.log(arr.shift()); // Removes the first element from an array and returns it.

console.log(arr.unshift("India")); // Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arr);

console.log(arr.splice(1, 1, 'Ireland')); // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log(arr.sort()); // Sorts an array in place in ascending order. This method mutates the array and returns a reference to the same array.

console.log(arr.reverse()); // Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

console.log(arr.sort().reverse()); // sort aorts the array ele in ascending order and after use reverse to get elements in descending order 