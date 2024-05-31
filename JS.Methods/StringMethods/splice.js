let str = "The quick brown fox jumps over the lazy dog.";
let start = 10;  // starting index
let deleteCount = 5;  // number of characters to remove

let arr = str.split(''); // Convert string to array
arr.splice(start, deleteCount); // Remove characters
str = arr.join(''); // Convert array back to string

console.log(str); // "The quick fox jumps over the lazy dog."

let str1 = "The quick brown fox jumps over the lazy dog.";
let start1 = 10;  // index at which to insert
let insertStr = "very ";  // string to insert

let arr1 = str.split(''); // Convert string to array
arr.splice(start, 0, ...insertStr); // Insert characters
str1 = arr.join(''); // Convert array back to string

console.log(str1); // "The quick very brown fox jumps over the lazy dog."
