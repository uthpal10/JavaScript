async function prom()
{
    console.log("Started");

    let p = new Promise( (resolve, reject) =>
    {
        setTimeout(() => 
        {
            resolve("operation Successful --> Promise is resolved");
            reject("operation Failed --> Promise is Rejected");   
        }, 2000)
    })
    
    await p.then( (m) => {console.log(m);}).catch( (m) => {console.log(m);})

    console.log("Ended");
}
prom()