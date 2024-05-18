let s = "Hi welcome to Bangalore";

let s1 = s.split(' ');

let copy = s;

let res = [];

for(let i=0; i<s1.length; i++)
{
    let a = s1.shift();
    if(copy == res)
    {
        break;
    }
}
console.log(res);