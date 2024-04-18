// All string methods return a new string. 
// They don't modify the original string.
// Strings are immutable: Strings cannot be changed, only replaced.

const s = "Rameshwaram";
// const s = "uthpal ullas";

// Returns the length of a String object.
console.log(s.length); 

// Returns the character at the specified index.
console.log(s.charAt(3)); 

// Returns the position of the first occurrence of a substring.
console.log(s.indexOf('a')); 

// Returns the last occurrence of a substring in the string.
console.log(s.lastIndexOf('r')); 

// Removes the leading and trailing white space and line terminator characters from a string.
console.log(s.trim()); 

// Returns a section of a string.
console.log(s.slice(0, 6)); 

// Returns a section of a string from reverse order.
console.log(s.slice(-5)); 

// Returns a section of a string.
console.log(s.substring(0, 6)); 

// Values less than 0 is treated as 0 in substring.
console.log(s.substring(-1)); 

// Converts all the alphabetic characters in a string to uppercase.
console.log(s.toUpperCase()); 

// Converts all the alphabetic characters in a string to lowercase.
console.log(s.toLowerCase()); 

// Returns a string that contains the concatenation of two or more strings,
// It gets append to the end of the string.
console.log(s.concat(" "+'charan')); 

// Returns a String value that is made from count copies appended together.
console.log(s.repeat(2));

// Split a string into substrings using the specified separator and return them as an array.
// if we give ("") -- single characters
console.log(s.split(" "));

// Replaces text in a string, using a regular expression or search string. --> (Case-Sensitive)
// console.log(s.replace('ullas', 'ramesh')); 

// To make replacement insensitive. /g --> for global match
// console.log(s.replace(/ULLAS/i, 'ramesh')); 

// To make replacement for all matches. (global match)
// console.log(s.replace(/ullas/g, 'ramesh'));  