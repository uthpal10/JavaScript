const s = "welcome to coding beauty";

console.log(`input --> ${s}`);

let splited = s.split(" ");

for(let i=0; i<splited.length; i++)
{
    let ch = splited[i][2];

    if(ch == 'a'|ch == 'e'|ch == 'i'|ch == 'o'|ch == 'u')
    {
        splited[i] = splited[i][0].toUpperCase() + splited[i].substring(1);
    } 
}
console.log(`output --> ${splited.join(" ")}`);