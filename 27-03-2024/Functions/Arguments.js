// Arguments object -- store the arguments which we are passing in the form of arrays

function Employee(name, company, age, id) 
{
    console.log
    (" The Employee details are "+name+" --> "+company+" ---> "+age+" ---> " +id);

    console.log(arguments[1]);

    console.log(arguments);
}
Employee('sachin', 'capgemini', 30, 12345)