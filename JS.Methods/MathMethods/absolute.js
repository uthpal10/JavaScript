let arr = [(-4.1), (3.3), null, "Hello", (2-3), 32]

// Returns the absolute value of a number (Value without regards to whether it is +ve or -ve

arr.forEach( ele => 
{ 
    console.log( Math.abs(ele) ) 
});

let r = arr.map( e => Math.abs(e) );
console.log(r);