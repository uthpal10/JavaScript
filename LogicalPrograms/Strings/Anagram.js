let s = "race";

let s1 = "care";

let w1 = s.split("").sort().join("");
console.log(w1);

let w2 = s1.split("").sort().join("");
console.log(w2);

if(w1 === w2)
{
    console.log("Anagram");
}
else
{
    console.log("Not a Anagram");
}