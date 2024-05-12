function outer()
{
    let count = 0;
    let name = 'uthpal';

    function inner()
    {
        count++;
        console.log(count);
        return name;
    }
    return inner;
}
let res = outer();
console.log(res());