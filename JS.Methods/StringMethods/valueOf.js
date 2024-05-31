const numObj = new Number(42);
const num = numObj.valueOf();
console.log(num); // 42
console.log(typeof (num)); // "number"

const strObj = new String("Hello, world!");
const str = strObj.valueOf();
console.log(str); // "Hello, world!"
console.log(typeof str); // "string"

const boolObj = new Boolean(true);
const bool = boolObj.valueOf();
console.log(bool); // true
console.log(typeof bool); // "boolean"

const dateObj = new Date();
const millis = dateObj.valueOf();
console.log(millis); // Number of milliseconds since January 1, 1970
console.log(typeof millis); // "number"