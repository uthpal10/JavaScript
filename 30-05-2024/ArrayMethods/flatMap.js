let a = [1,2,3,4];

// Calls a defined callback function on each element of an array. Then, flattens the result into a new array. 
// This is identical to a map followed by flat with depth 1.

let r = a.flatMap( e => [e, e*2] );
console.log(r);

let r1 = a.flatMap( e => ( e % 2 == 0 ? [e, e*2] : [] ) );
console.log(r1);

let b = [[1],2,[3,4],5,[6,7,8]];
let r2 = b.flatMap( e => e );
console.log(r2);