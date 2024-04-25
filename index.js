// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Count Characters
function countCharacters(str) {
    return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}
// Find Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}
// Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

// Fibonacci Sequence
function generateFibonacci(num) {
    let sequence = [0, 1];
    for (let i = 2; i < num; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}
console.log(reverseString("hello")); // Output: "olleh"
console.log(countCharacters("hello")); // Output: 5
console.log(capitalizeWords("hello world")); // Output: "Hello World"

const numbers = [5, 2, 9, 1, 7];
console.log(findMax(numbers)); // Output: 9
console.log(findMin(numbers)); // Output: 1
console.log(sumArray(numbers)); // Output: 24
console.log(filterArray(numbers, num => num > 3)); // Output: [5, 9, 7]

console.log(factorial(5)); // Output: 120
console.log(isPrime(7)); // Output: true
console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
