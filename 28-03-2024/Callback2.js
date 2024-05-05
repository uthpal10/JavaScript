function add(a, b)
{
    console.log(`The sum is ${a+b}`);
}

function sub(a, b)
{
    console.log(`The difference is ${a-b}`);
}

function perform(d1, d2, callback1, callback2)
{
    callback1(d1, d2, add)
    
    setTimeout( () => 
    {
        callback2(d1, d2, sub)
    }, 3000);
}
perform(10, 5, add, sub)