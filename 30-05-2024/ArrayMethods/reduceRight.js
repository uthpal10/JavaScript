let a = [1,2,3,4,5];

// Calls the specified callback function for all the elements in an array, in descending order. 
// The return value of the callback function is the accumulated result, and is provided as an argument
// in the next call to the callback function.

let r = a.reduceRight( (a,b) => (a+b), 0);
console.log(r);

let r1 = a.reduceRight( (a,b) => (a*b), 1);
console.log(r1);

let b = [ [1,2], [3,4], [5,6] ];
let r2 = b.reduceRight( (a,b) => a.concat(b), []);
console.log(r2);

let avg = r / a.length;
console.log(avg);