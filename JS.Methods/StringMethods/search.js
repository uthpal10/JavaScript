const str = "The quick brown fox jumps over the lazy dog.";
const index = str.search(/quick/);
console.log(index); // 4

const str1 = "The quick brown fox jumps over the lazy dog.";
const index1 = str.search("fox");
console.log(index1); // 16

const str2 = "The quick brown fox jumps over the lazy dog.";
const index2 = str.search(/cat/);
console.log(index2); // -1

