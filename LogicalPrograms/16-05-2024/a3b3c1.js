let s = "aabbabc";

let map = {};

for(let char of s)
{
    map[char] = (map[char] || 0) +1;
}

// console.log(map);

let output = '';
for(let char in map)
{
    output += char + map[char];
}
console.log(output);