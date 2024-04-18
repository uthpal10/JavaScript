var a = 10;
let b = 20;
const c= 30;

function sample()
{
    var d = 40;
    let e = 50;
    const f  =60; 
    {
        var g = 11;
        let h = 22;
        const i = 33;
    }
    // console.log(g); // able to access because var is outer scoped for sample
    // console.log(h); // Not able to access outside the block 
}
// console.log(d); // Not able to access it is local scoped for function
sample()

{
    var z = 44;
    let x = 33;
    const s = 22;

    function sampl()
    {
        var a2 = 'uthpal';
        let b2 = 80;
        const c2 = 90;
        // console.log(s);
    }
    sampl()
    // console.log(s);
}
console.log(z);
