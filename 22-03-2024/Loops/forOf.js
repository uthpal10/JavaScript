// It iterates over values of an iterable objects
// used with Array, Strings, Maps, sets
// Returns the values of iterable objects 

const abb = ['hello', 12];

let map = new Map();

// To add elements into the map
map.set('Uthpal', 'Engineer'); 
map.set('Cricket', 'Sport');

// To get the values from map  
console.log(map.get('Uthpal'));

for (const key in abb) 
{
   console.log(key+ " : " +abb[key]);
}