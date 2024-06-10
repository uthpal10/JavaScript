let a = [1,2,3,4,5,6];
// console.log(a);

// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset 
// from the end of the array. For example, -2 refers to the second to last element of the array.
// works exactly like substring() which is string method

let r = a.slice();
console.log(r);

let r1 = a.slice(0,2);
console.log(r1);

let r2 = a.slice(2);
console.log(r2);

let r3 = a.slice(-3);
console.log(r3);

let r4 = a.slice(0,-2);
console.log(r4);