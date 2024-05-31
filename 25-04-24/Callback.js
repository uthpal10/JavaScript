function add(a,b)
{
    console.log(a+b);
}

function sub(a,b)
{
    console.log(a-b);
}

function main(q1,q2,callback1,callback2)
{
    callback1(q1,q2,callback1);
    setTimeout( () =>
    {
        callback2(q1,q2,callback2)
    }, 2000)
}
main(8,4,add,sub)