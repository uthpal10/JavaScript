// used to iterate over arrays, maps, sets
// can access both (values, index and ref var)
 
const acc = [10, 20, 30, 40, 50]
console.log(acc);

acc.forEach( e => console.log(e*2));

acc.forEach( (values, index, arrays) => 
{
    console.log(values+2, index, arrays);
});

let map = new Map();
map.set('Name','Uthpal')
map.set('Role', 'Engineer')
map.set('Name','Ramesh')

map.forEach( (keys, values) => 
{
    console.log(values, keys);
});