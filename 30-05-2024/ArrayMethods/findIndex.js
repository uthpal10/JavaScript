let a = [1,2,3,4,5];
console.log(a);

// Returns the index of the first element in the array where predicate is true, and -1 otherwise.

let r = a.findIndex( e => e % 2 == 4 );
console.log(r);

let phone = 
[
    {name:'One Plus', Model:'Nord 2T'},

    {name:'Redmi', Model:'Note 11'},

    {name:'Iphone', Model:'15 Plus'}
];

let r1 = phone.findIndex( e => e.name == 'Iphone' );
console.log(r1);