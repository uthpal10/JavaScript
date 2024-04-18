let patient1 = {name:'pat1', age:23, disease:'fever', date:'28-03-24'}

let patient2 = {name:'pat2', age:22, disease:'cancer', date:'28-03-34'}

function patientdetails(a,b) 
{
    console.log
    (`Patient detais are: ${this.name} ${this.age} ${this.disease} ${this.date} ${a+b}`);    
}

// call() with arguments
patientdetails.call(patient1, 2, 2);

// apply() with arguments
patientdetails.apply(patient2, [10,5])

// bind with arguments
let a = patientdetails.bind(patient2, 10,10)
console.log(a);
a();