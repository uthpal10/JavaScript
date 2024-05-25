import prompt from "prompt-sync";

let prom = prompt();

let s = "javaseleniumjavaseleniumjavascriptwdio";
// let s1 = s.split(/[^java]/);
let s2 = s.split(/[^selenium]/);
let s3 = s.split(/[^javascript]/);
let s4 = s.split(/[^wdio]/);

console.log(s2);

let input = prom("Enter the String: ");
let input1 = input.toLowerCase();

let count = 0;
for(let i=0; i<s2.length; i++)
{
    if(s2[i] == 'selenium')
    {
        count++;
    }
}
console.log(`count of ${input1} is: ${count}`);
