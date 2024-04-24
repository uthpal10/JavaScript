// Expand an array into all its elements basically unpacking all the array elements at once
let arr = [3,4,5,6];
console.log(...arr);

// Adding new elements to the array
let arr1 = [1,2,...arr,7,8];
console.log(arr1);

// Spread in Object Array
let person=
{
    name:'Ramesh',
    id:123,
    place:['Mysore', 'Bangalore'],
    details : function(a,b,c)
    {
        console.log(a+b+c);
    }
}
// console.log(person);

// Spread In functions
let res = [4,6,8]
person.details(...res)

// creating a copy from the object
let arr2 = [...person.place]
console.log(arr2);

// Merging two arrays
let arr3 = [...person.place,...arr];
console.log(arr3);

// Merging strings
let str = 'javaScript';
let str1 = [...str,'Mocha']
console.log(str1);