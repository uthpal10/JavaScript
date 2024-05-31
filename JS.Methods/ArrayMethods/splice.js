let a = [1,2,3,4,5,6];
console.log(a)

// Removes elements from an array and, if necessary, 
// inserts new elements in their place, returning the deleted elements.

let r = a.splice(3, 3, "Replaced");
console.log(r)

console.log(a);