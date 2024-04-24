// Rest patterns and parameters, It has same syntax as spread i.e,
// But It works exactly opposite to spread operator, It will collect multiple elements & condense them into an array.
// variables separated by ,(comma's)
let arr = [3,4,5,6];
let [a,b,...others] = arr;
console.log(a,b,others);

// Rest in Object array
let laptop =
{
    brand: 'Lenovo',
    model: 'Z51-70',
    SaleCountry: ['India', 'USA'],
    ram: ['4GB', '8GB'],
    details: function()
    {
        console.log(this.brand);
    }
}
// console.log(laptop);
laptop.details()

// destructing of array with rest 
let [arr1,...otherss] = [...laptop.SaleCountry,...laptop.ram]
console.log(arr1, otherss);

// Rest in Functions
function add(...num) // rest parameter
{ 
    // using rest ==> pack all the elements into an array
    // console.log(num);
    let sum = 0;
    for(let i=0; i<arguments.length; i++) // also use num.length
    {
        // sum = sum + num[i];
        sum += num[i];
    }
    console.log(sum);
}
add(1,2,3,4,5,6,7,8,9)
add(1,3,5,7,9)
add(2,4,6,8)

// using spread ===> unpacking the elements from an array
let r = [10,11,12,13,14,15];
add(...r)