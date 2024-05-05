// It iterates over values of an iterable object 

// used with Array, Strings, Maps, sets

// Returns values of the iterable object 

const abb = ['hello', 12] // 'uthpal'

let map = new Map();
map.set('Uthpal', 'Engineer')
map.set('Cricket', 'SPort')
console.log(map.get('Uthpal'));

for (const key of abb) 
{
//    if(i=='hello')
//    {
//         console.log(i);
//    } 
   console.log(key);
}