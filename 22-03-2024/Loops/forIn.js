// It used to iterate over an enumerable (countable or listable) (that can be iterated) property of an object

// used in objects

// returns properties (keys) of an object

// const laptop = 
// {
//     brand : 'lenovo', 
//     model : 'Z51-70', 
//     cost : [55000,30000], 

//     details : function ()
//     {
//         console.log(`The Laptop details are ${this.brand} ${this.model} ${this.cost}`);
//     }    
// }
// laptop.details();
// console.log(laptop);

let arr = [12, 2, 3];

for (const key in arr) 
{
    // console.log(`${i} --> ${arr[i]}`);

    console.log(arr[key]);

}


