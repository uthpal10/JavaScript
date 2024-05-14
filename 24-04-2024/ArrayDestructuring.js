// unpack the values from an array and storing it in the variables
let arr = [1,2,3,4]
let [a,b,] = arr;
console.log(a,b);

// normally we will do like this
let c = arr[2]
let d = arr[3]
console.log(c,d);

let person =
{
    name: 'Ramesh',
    place: ['Bangalore','Mysore']
}

// Destructuring in the object
let [fir, sec] = person.place
console.log(fir, sec);

// let temp = fir;
// fir = sec;
// sec = temp;
// console.log(fir);
// console.log(sec);


// swapping the values
let [second, first] = [fir, sec]
console.log(first, second);

// setting default values
let [p,q=6,r='uthpal',s] = [5,6,null,8]
console.log(p,q,r,s);