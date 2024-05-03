const obj =
{
    name : 'uthpal',
    age : 28,
    place : 'Bangalore'
}

// let arr = ['kohli', 'Dhoni', 20, 30]

let arr = 'uthpal';

// for (const key in obj) 
// {
//     console.log(key);    
// }

let itr  = Object.entries(obj);

for (const key of itr)   
{
    console.log(key);
}
