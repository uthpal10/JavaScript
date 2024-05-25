let no = 153;
let copy = no;
let res = 0;

while(no>0)
{
    let rem = no % 10;
    res = (rem*rem*rem) + res;
    no = parseInt(no / 10);
}
if(copy == res)
{
    console.log("Armstrong Number");
}
else
{
    console.log("Not a Armstrong Number");
}