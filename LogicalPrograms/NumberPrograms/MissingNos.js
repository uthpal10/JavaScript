let a = [1,3,5,7,9];
console.log(...a);

let a1 = [];
let res = [];

for(let i=1; i<10; i++)
{
    a1.push(i);
}
console.log(...a1);

a1.filter( e =>
{
    if(!a.includes(e))
    {
      res.push(e);
    }
})
console.log(...res);