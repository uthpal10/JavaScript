// Returns a pseudo-random number between 0 and 1.
console.log(Math.random());

let ranNo = Math.floor( Math.random() * 100 )+1;
console.log(ranNo);

let ran = function(max, min)
{
    return Math.floor( Math.random() * ( max - min +1) );
}
let res = ran(1000, 1);
console.log(res);

function getRandomEle(a)
{
    return a[ Math.floor(Math.random() * a.length) ];
}
let fruits = ['apple', 'mango', 'kiwi', 'banana', 'cherry', 'date', 'pomegrenate', 'butterfruit'];
let res1 = getRandomEle(fruits);
console.log(res1);

function getRandomString(length) 
{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) 
    {
      result += characters.charAt(Math.floor( Math.random() * characters.length ));
    }
    return result;
}
const randomString = getRandomString(10); // ===> Generates a random string of length 10
console.log(randomString);