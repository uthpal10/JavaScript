class Student
{
    a = 10; // Non Static variable
    static b = 20; // Static variable

    constructor(fname, lname, age)
    {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    static details()
    {
        // let s = new Student()
        console.log(`Non-static variable ${s1.a}`);
        console.log(`Static variables ${this.b} or ${Student.b}`);
    }

    fdetails() // Non-Static method
    {
        // let  s = new Student();
        console.log(`Static -- ${Student.b}`);
        console.log(`Non-Static -- ${s1.a} or ${this.a}`)
        console.log(`Constructor ${this.age}`);
    }
}
let s1 = new Student('uthpal', 'ramesh', 28);
console.log(s1);
Student.details() // Static
s1.fdetails()  // Non-Static

class Teacher extends Student // Inheritance extending student class
{
    constructor(fname, lname, age)
    {
        super(fname, lname)
        this.age = age;
    }
    
    fdetails() // Non-static method ------ // overriding method of parent class
    {
        super.fdetails(); // To get parent class implementation
        console.log('New Implementation');
    }
}

let t = new Teacher('Virat', 'Kohli', 35);
console.log(t);
t.fdetails();

export default new Student('Rohith', 'Sharma', 39);