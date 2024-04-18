const variable = 'global'

function outer(a, b)
{
    var name = 'uthpal'
    let count = 0;
    
    function inner() 
    {
        console.log(name);
        console.log(count++);
        // console.log(++count+" "+variable+" "+(a+b));
        console.log(`${++count} ${variable} ${a+b}`);
    }
    return inner;
}
let innfunc = outer(10,20);
innfunc()
// innfunc()