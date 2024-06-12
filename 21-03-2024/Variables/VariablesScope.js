var a = 20;
let b = 30;
const c = 40;

// console.log(a);
// console.log(b);
// console.log(c);

function add() 
{
    var a1 = 22;
    const b1 = 33;
    const c1 = 44;

    {
        var a2 = 11;
        let b2 = 21;
        let c2 = 32;
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(a1);
        console.log(b1);
        console.log(c1);
        console.log(a2);
        console.log(b2);
        console.log(c2);
    }
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a2);
    // console.log(b2); // Not able to access outside block
    // console.log(c2); // Not able to access outside block
}
// console.log(a2); // can't access a2 which is function scoped
add()

{
    var a3 = 55;
    let b3 = 66;
    const c3 = 77;
}
console.log(a3);
// console.log(b3); // can't access let and const outside the block
// console.log(c3);

