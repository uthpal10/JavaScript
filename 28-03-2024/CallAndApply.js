// function persondetails()
//     {
//         console.log(`Person details are ${this.fname} ${this.lname}`);
//     }

let person =
{
   details : function (a, b) 
   {
    return ("person details are "+ this.fname +" "+ this.lname + " ," + " Parameters value is --> "+ (a+b));
   } 
}

let person1 = { fname:'Virat', lname:'Kohli' }

let person2 = { fname:'Rohit', lname:'Sharma'}

// let result = person.details.call(person2, 4, 6);

let result = person.details.apply(person2, [4,6]);

console.log(result);