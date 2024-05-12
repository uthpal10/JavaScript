// It iterates over values of an iterable objects <==> can be used with Array, Strings, Maps, sets
// Returns the values of iterable objects 

// forOf in the Array
const abb = ['hello', 12];
for (let key of abb)
{
   console.log(key);
}

// forOf in the Map
let map = new Map();

// To add elements into the map
map.set('Uthpal', 'Engineer'); 
map.set('Cricket', 'Sport');

console.log(map.get('Uthpal'));

// To get the values from map  ==> for of returns the map elements in the form of array.
for (const key of map) 
{
   console.log(key);
}

// forOf in the Object
// Alone we can't fetch the values from the object using forOf loop ==> we will get the error Not iterable
// ==> we should use object.entries() for that.
const Cricket = 
{
   name : 'Virat',
   country : 'India'
};

console.log("-------------------------")

let acc = Object.entries(Cricket);
for(let key of acc)
{
   console.log(key);
}