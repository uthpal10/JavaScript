let bike = new Object()
bike.brand = 'Pulsar'
bike.model = 'NS 200'
bike.spec = function details()
{
    console.log(`Bike details are ${this.brand}`);
}

for (const key in bike) {
    {
        // const element = bike[key];
        console.log(key);   
    }
}

Object.defineProperty(bike, 'colour', {
    enumerable:true,
    value:'white'
})

console.log(bike);
bike.spec();
console.log(Object.keys(bike));
console.log(bike.hasOwnProperty('brand'));
console.log(bike.propertyIsEnumerable('spec'));

let res = Object.entries(bike)
// console.log(res);
for(let ref of res)
{
    console.log(ref);
}

// for (const key in bike) {
//     if (bike.hasOwnProperty.call(bike, key)) {
//         const element = bike[key];
//         console.log(key + " ===> " + element);
        
//     }
// // }

// console.log(JSON.stringify(bike));

// console.log(JSON.parse('{"brand":"Pulsar","model":"NS 200","colour":"white"}'));
