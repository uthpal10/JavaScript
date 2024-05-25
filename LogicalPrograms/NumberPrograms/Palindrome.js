let no = 123;

let copy = no;

let rev = 0;

while(no > 0)
{
    let rem = no % 10;
    rev = (rev*10) + rem;
    no = parseInt(no / 10);
}
let res = (copy == rev) ? `Palindrome` : `Not a Palindrome`;
console.log(res);