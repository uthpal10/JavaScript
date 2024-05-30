let a = [1,2,3,4,5,6,7];

let res = [];

for(let i=0; i<a.length-1; i++)
{
    if(i!=1 && i!=4)
    // if(a[i]!=2 && a[i]!=5)
    {
      res.push(a[i+1] * a[i]);
    }
}
console.log(res);