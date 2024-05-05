import Prompt from "prompt-sync";
const prompt = Prompt();

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function printPrimes(limit) {
    const primes = [];
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    console.log(`Prime numbers up to ${limit} are:`, primes);
}

const limit = parseInt(prompt("Enter a limit to print prime numbers up to:"));
printPrimes(limit);
