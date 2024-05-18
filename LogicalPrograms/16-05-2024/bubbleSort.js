let a = [5,3,0,4,1];

for(let i=0; i<a.length; i++)
{
    for(let j=i+1; j<a.length; j++)
    {
        if(a[i] > a[j])
        {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
        console.log(a);
    }
}
console.log(a);
process.stdout.write(a.toString())