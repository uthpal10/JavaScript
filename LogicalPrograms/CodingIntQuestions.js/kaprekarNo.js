let st = 1;
let end = 10;

function kaprekar(a, b)
{
    let res = [];
    for(let i=a; i<=b; i++)
    {
        let sq = i*i;
        console.log(sq);
        let sqstr = sq.toString();
        console.log(sqstr);
        let len = i.toString().length;
        console.log(len);
      
        const rightPart = parseInt(sqstr.slice(-len)) || 0;
        console.log(rightPart);
     
        const leftPart = parseInt(sqstr.slice(0, -len)) || 0;
        console.log(leftPart);
      
        if( (rightPart + leftPart) == i )
        {
          res.push(i);
        }
    }
console.log(...res);
}
kaprekar(st, end);

