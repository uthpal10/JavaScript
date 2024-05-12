// The main difference between the filter() and map() methods is that the 
// filter() method returns a new array containing only the elements of the original array that pass a specified test.
// while the map() method returns a new array containing the results of applying 
// a specified function to each element of the original array.
// Both filter and map do not modify the original array but instead return a new array 
// with the desired elements or transformed values. 
// These methods are commonly used in functional programming and provide a concise and 
// expressive way to work with arrays in JavaScript.
let arr = [23, 11, 45, 65, 88, 76]

let evenNos = arr.filter ( ele => ele % 2 === 0 )
console.log(evenNos);

let oddNos = arr.map ( ele => ele * 2 )
console.log(oddNos);