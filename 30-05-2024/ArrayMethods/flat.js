let a = [1,2,3,4,5,6];
console.log(a);

// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.


let r = a.flat();
console.log(r);

let b = [1,2,3,[4,5,6]];
let r1 = b.flat();
console.log(r1);

let c = [1,2,[3,[4,5,6]]];
let r2 = c.flat(1);
console.log(r2);