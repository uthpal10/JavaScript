function countVowels(str) 
{
    const vowels = 'aeiouAEIOU';
    const vowelCount = {};

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount[char] = (vowelCount[char] || 0) + 1;
        }
    }

    for (const vowel in vowelCount) {
        console.log(`${vowel} ---> ${vowelCount[vowel]}`);
    }
}

const inputString = 'testyantra';
countVowels(inputString);