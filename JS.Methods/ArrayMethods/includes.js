let a = [1,2,3,4,5];

// Determines whether an array includes a certain element, returning true or false as appropriate.

let r = a.includes(3);
console.log(r);

let b = ['hi', 'good', 'Bye'];

let r1 = b.includes('hi');
console.log(r1);

let r2 = b.includes('bye');
console.log(r2);

let r3 = b.includes('good', 2); // starts searching from 2nd index
console.log(r3);