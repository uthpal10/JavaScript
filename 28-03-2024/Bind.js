// With the bind() method, an object can borrow a method from another object.

// The member object borrows the fullname method from the person object:

const person = 
{
    firstName : "virat",
    lastName : "kohli",
    fullName : function (a, b) 
    {
        return this.firstName + " " + this.lastName +" "+(a+b);
    }
}
console.log(person.fullName());

const member = 
{
    firstName : "Rohit",
    lastName : "Sharma",
}

let fullName = person.fullName.bind(member, 2, 3);
console.log(fullName());


