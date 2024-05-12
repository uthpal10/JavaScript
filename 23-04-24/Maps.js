// Creating a Map:
const myMap = new Map();

// Adding and Accessing Key-Value Pairs:
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

console.log(myMap.get('key1')); // Output: value1

// Checking for Key Existence:
console.log(myMap.has('key1')); // Output: true
console.log(myMap.has('key3')); // Output: false

// Removing Key-Value Pairs:
// myMap.delete('key1');

// Iterating Over a Map:
// You can iterate over the entries, keys, or values of a Map using its built-in iterator methods
//  (entries(), keys(), values()), or by using a for...of loop:
for (const [key, value] of myMap.entries()) {
    console.log(`${key} : ${value}`);
  }
  
  // Using for...of loop with keys()
  for (const key of myMap.keys()) {
    console.log(key);
  }
  
  // Using for...of loop with values()
  for (const value of myMap.values()) {
    console.log(value);
  }
  
// The Map object is particularly useful when you need a data structure that preserves the insertion order of keys 
// and allows for any data type as keys or values. 
// It also provides efficient methods for key-value management and iteration.