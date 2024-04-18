const phone = new Object()

phone.brand = 'One Plus'
phone.colour = 'grey'
phone.price = [40000, 35000, 30000]
phone.model = 'Nord 2T 5g'

Object.defineProperty(phone, 'id',
{
    enumerable : false,
    value : 123
})

// console.log(phone);
// console.log(Object.keys(phone));

// Determines whether an object has a property with the specified name. --> returns value in boolean
console.log(phone.hasOwnProperty('brand')); 

console.log(phone.propertyIsEnumerable('brand')); // To check prop is Enumerble --> returns value in boolean

// To get all the enumerable properties in array form --> Returns an array of key/values
// let res = Object.entries(phone); 
// console.log(res);

// console.log(typeof(phone));

let text = "";
// for(const x in phone)
// {
//     // console.log(x);
//     // console.log(phone[x]);
//     // console.log( x +" = "+ phone[x] );
//      text += x+ " --> " +phone[x]+ " , ";
// }
// console.log(text);