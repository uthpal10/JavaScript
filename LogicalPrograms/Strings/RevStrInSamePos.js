let str = "JavaScript is scripting language"
console.log(str);

let splitted = str.split(" ");

for(let i=0; i<splitted.length; i++)
{
    let st = splitted[i];
    let rev = "";

    if(i%2 == 0){
    for(let j=st.length-1; j>=0; j--)
    {
        // rev = rev + st.charAt(j);
        rev = rev + st[j];
    }}
    process.stdout.write(rev + " ");
    // console.log(rev);
}
