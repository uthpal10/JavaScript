let s = "The quick brown fox jumps over the lazy dog"

const r = s.match(/quick/);
console.log(r);

// [
//   'quick',
//   index: 4,
//   input: 'The quick brown fox jumps over the lazy dog',
//   groups: undefined
// ]

const str = "The quick brown fox jumps over the lazy dog.";
const result = str.match(/o/g); // 'g' flag for global match
console.log(result); // ["o", "o", "o"]
