function separateCharacters(input) {
    let uppercase = '', lowercase = '', numbers = '', specialChars = '';
    for (let char of input) {
        if (/[A-Z]/.test(char)) {
            uppercase += char;
        } else if (/[a-z]/.test(char)) {
            lowercase += char;
        } else if (/[0-9]/.test(char)) {
            numbers += char;
        } else {
            specialChars += char;
        }
    }
    console.log(`Uppercase: ${uppercase}`);
    console.log(`Lowercase: ${lowercase}`);
    console.log(`Numbers: ${numbers}`);
    console.log(`Special Characters: ${specialChars}`);
}
const inputString = 'AxB1#*eZ8';
separateCharacters(inputString);
