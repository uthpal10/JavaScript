function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function printPrimes(arr) {
    const primeNumbers = arr.filter(num => isPrime(num));
    console.log("Prime numbers in the array:", primeNumbers);
}

// Example usage:
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
printPrimes(numbers);