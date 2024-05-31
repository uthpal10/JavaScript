async function exe()
{
    console.log("Started");

    let p = new Promise( (resolve, reject) =>
    {
        setTimeout( () => 
        {
            resolve("Cart");
            reject("Error");
        }, 2000);
    })

    await p.then( (m) => console.log(m)).catch( (m) => console.log(m)).finally( (m) => console.log("Ended"));
}
exe()