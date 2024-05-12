class Student
{
    static a = 20;
    b = 33;

    constructor(fname, lname, age)
    {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    static stat()
    {
        // console.log(`Static variable ${Student.a} or ${this.a}`);
        // console.log(`Non-Static variable ${s1.b}`);
    }

    details()
    {
        console.log(`Static variable ${Student.a}`);
        console.log(`Non-Static variable ${s1.b} or ${this.b}`);
        console.log(this.age);
    }
}
let s1 = new Student('virat', 'Kohli', 35);
Student.stat();
s1.details();

class Teacher extends Student
{
    constructor(fname, lname, age)
    {
        super(fname, lname);
        // this.fname = fname;
        // this.lname = lname;
        this.age = age;
    }

    details()
    {
        super.details();
        console.log("New Implementation");

    }
}
let t = new Teacher('Rohit', 'Sharma', 38)
console.log(t);
t.details();

export default new Student();