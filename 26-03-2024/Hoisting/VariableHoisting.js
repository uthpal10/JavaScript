// --> Var supports for Hoisting but we will get value as undefined

console.log(a);
var a = 20;
// console.log(a);

// --> let and const will not support for Hoisting

console.log(b);
let b = 'javaScript';

console.log(c);
const c = 78;