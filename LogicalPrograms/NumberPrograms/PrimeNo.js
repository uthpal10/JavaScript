let no = 8;

let count = 0;

for(let i=1; i<=no; i++)
{
    if(no % i == 0)
    {
        count ++;
    }
}
let res = count == 2 ? `Prime` : `Not a Prime`;
console.log(res);