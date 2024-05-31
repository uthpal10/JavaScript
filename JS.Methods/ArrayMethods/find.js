let a = [1,2,3,4,5];
console.log(a);

// Returns the value of the first element in the array where predicate is true, and undefined otherwise.

let r = a.find( e => e % 2 == 0 );
console.log(r);

let phone = 
[
    {name:'One Plus', Model:'Nord 2T'},

    {name:'Redmi', Model:'Note 11'},

    {name:'Iphone', Model:'15 Plus'}
];

let r1 = phone.find( e => e.name == 'Iphone' );
console.log(r1);