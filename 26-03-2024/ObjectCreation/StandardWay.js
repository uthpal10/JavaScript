// standard way
let persondetails =
{
    pname : 'Ramesh',
    age : 28,
    'cont No' : 9876543210,
    address : ['Bangalore', 'Mysore'],
    details : function () 
    {
        console.log
        ("Person details are : "+" name --> "+this.pname+" "+" age --> "+this.age);    
    },
    spouse : 
    {
        sname : 'qwerty',
        sage : 24
    }
}
persondetails.details();

for (const key in persondetails) 
{
        const element = persondetails[key];
        console.log(key+ " ==> " +element);   
}

// console.log(Object.values(persondetails));

// --> Dot Notation
// console.log(persondetails);
// console.log(persondetails.address[0]);
// persondetails.details()

// --> Bracket Notation
// console.log(persondetails["address"]);
// console.log(persondetails['spouse']['sname']);

// --> Delete Property
// delete persondetails.age
// console.log(persondetails.age);

// --> Modify Details
// persondetails.age = 25
// console.log(persondetails['age']);

// --> Add New property
// persondetails.country = 'India'
// console.log(persondetails);
// console.log(persondetails['country']);