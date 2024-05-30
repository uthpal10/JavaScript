let a = [1,4,9,16,25];

// Returns the square root of a number.

a.forEach( e =>
{
    console.log(Math.sqrt(e));
});

let r = a.map( e => Math.sqrt(e) );
console.log(r);
