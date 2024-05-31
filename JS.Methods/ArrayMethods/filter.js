let a = [10,11,12,13,14,15];
console.log(a);

let r = a.filter( e => e % 2 == 1 );
console.log(r);

a.filter( (a,b,c) =>
{
    if(a % 2 == 0)
    {
        console.log(a,b,c);
    }
});