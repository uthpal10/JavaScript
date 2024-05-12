async function exe()
{
    console.log("Login Successful");

    let p = new Promise( (resolve, reject) =>
    {
        setTimeout( () => 
        {
            resolve("Cart");
            reject("Error");
        }, 2000);
    })

    await p.then( (msg) => { console.log(msg); } )
    .catch( (msg) => { console.log(msg); })
}
exe()