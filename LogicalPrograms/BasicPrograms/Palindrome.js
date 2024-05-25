let no = 141, copy = no, rev = 0;

while(no != 0) // no > 0
{
    let rem = no % 10;

    rev = rev*10 + rem;

    no = Math.floor( no /10 ) // parseInt(no / 10);
}
if(rev == copy)
{
    console.log("PN");
}
else
{
    console.log("NPN");
}