function countConsonants(str) {
    // const consonants = 'bcdfghjklmnpqrstvwxyz';
    const vowels = 'aeiouAEIOU';
    const count = {};

    str.toLowerCase().split('').forEach(char => {
        if (!vowels.includes(char)) {
            count[char] = (count[char] || 0) + 1;
        }
    });

    for (const consonant in count) {
        console.log(`${consonant} --> ${count[consonant]}`);
    }
}

const inputString = "testyantra";
countConsonants(inputString);