let a = [1,2,3,4,5];

// Calls the specified callback function for all the elements in an array. The return value of the callback function 
// is the accumulated result and is provided as an argument in the next call to the callback function.

// // Accumulator (acc): The accumulator accumulates the callback's return values. 
// It is the accumulated value previously returned in the last invocation of the callback, 
// or the initial value if supplied.
// Current Value (cur): The current element being processed in the array.

let r = a.reduce( (a,b) => (a+b), 0);
console.log(r);

let r1 = a.reduce( (a,b) => (a*b), 1);
console.log(r1);

let b = [ [1,2], [3,4], [5,6] ];
let r2 = b.reduce( (a,b) => a.concat(b), []);
console.log(r2);

let avg = r / a.length;
console.log(avg);