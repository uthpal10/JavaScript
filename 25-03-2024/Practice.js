var a = 20;
let b = 30;
let c = 40;

function add() 
{
    var a1 = 22;
    const b1 = 33;
    const c1 = 44;

    {
        var a2 = 11;
        let b2 = 21;
        let c2 = 32;
    }
}
add()

{
    var a3 = 55;
    let b3 = 66;
    let c3 = 77;
}
console.log(a3);
// console.log(b1);
// console.log(c1);

