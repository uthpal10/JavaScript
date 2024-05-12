var a = 15;
let b = 20;
const c = 43;

function test()
{
    var d = 51;
    let e = 24;
    const f = 73;
    console.log(c);
    console.log(f);
    {
        var d = 55;
        let e = 25;
        const f = 93;
        console.log(f);
    }
}
test()
// console.log(d);