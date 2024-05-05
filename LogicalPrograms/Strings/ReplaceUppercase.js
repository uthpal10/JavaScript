function replaceUppercaseT(inputString) {
    const replacedString = inputString.replace(/[A-Z]/g, 'T');
    return replacedString;
}

const originalString = "Hello World! This is a Test String.";
console.log(originalString);
const modifiedString = replaceUppercaseT(originalString);
console.log(modifiedString);
