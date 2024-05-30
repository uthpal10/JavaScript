function anagram(a,b)
{
    let s = a.toLowerCase().split("").sort().join("");
    let s1 = b.toLowerCase().split("").sort().join("");
    
    return s === s1;
}
let input = "Race"
let input1 = "Care"
let res = anagram(input, input1);
console.log(res);