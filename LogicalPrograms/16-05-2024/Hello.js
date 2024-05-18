let s = "hello";

for(let i=0; i<s.length; i++)
{
    process.stdout.write(s[i]);
    for(let j=0; j<=i; j++)
    {
        process.stdout.write(" ")
    }
}