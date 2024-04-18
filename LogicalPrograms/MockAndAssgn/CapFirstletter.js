const str = "welcome to coding beauty";

console.log(`Input --> ${s}`);

let splitted = str.split(" ");

for(let i=0; i<splitted.length; i++)
{
    splitted[i] = splitted[i][0].toUpperCase() + splitted[i].substring(1);  
}
console.log(`output --> ${splitted.join(" ")}`);
