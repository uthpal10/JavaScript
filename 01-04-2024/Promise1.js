function asyncoperation()
{
    console.log("Started");
    return new Promise( (resolve, reject) =>
    {
        setTimeout( () =>
        {
            resolve("Successfully resolved the Promise");
            reject("Rejected");
        }, 3000);
    })
}
asyncoperation().then( (m) => console.log(m)).catch( (m) => console.log(m)).finally( (m) => console.log("Ended"));