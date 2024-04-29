const arr = "99123766678";

let [...oth] = arr;
console.log(oth);

let res = [];

oth.map( ele =>
{
    if(ele%2==0)
    {
        res.push(ele)
    }
})
console.log(res);
