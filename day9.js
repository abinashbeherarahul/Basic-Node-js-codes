//write a program to print true where a number is divisible by 3 and 5 but not 10
let num = 10;
if (num % 3 == 0 && num % 5 == 0 && num % 10 != 0) {
  console.log("true");
} else {
  console.log("false");
}

//swap the values of two variables without using third

let a = 10;
let b = 18;
a = a + b;
b = a - b;
a = a - b;
console.log("a=", a, "b=", b);

// print all even number using 1 - 49

for (let i = 2; i <= 49; i += 2) {
  console.log(i);
}
// write a function isprime() which will return true id number is prime
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  if (num === 2) return true; // 2 is the only even prime number
  if (num % 2 === 0) return false; // eliminate even numbers

  // Check only odd divisors up to √num
  for (let i = 2; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}
console.log(isPrime(7));
console.log(isPrime(10)); 
console.log(isPrime(2));
console.log(isPrime(1)); 

//write a function which rembembers howw many time it has been called
function createCallCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(`Called ${count} times.`);
    return count;
  };
}
const countCalls = createCallCounter();

countCalls();
countCalls();
countCalls();

//write a function to count vowels in a word
function countVowels(word) {
  return (word.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("Abinash"));

//write a function to count Vowles in a word
function countVowel(a) {
  return a.match(/[aeiou]/gi) ? a.match(/[aeiou]/gi).length : 0;
}

console.log(countVowel("subhra"));

// Store text  Convert to uppercase
let text = "abinash";

let upperText = text.toUpperCase();
console.log(text, upperText);

import { add, subtract, multiply, divide } from "./module.js";
console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(multiply(2, 6));
console.log(divide(8, 2));

// Create an array with numbers 1 through 99 and print as a single array
const numbers = Array.from({ length: 99 }, (_, i) => i + 1);
console.log(numbers);

//extract the vowels and write remaining consonants
const input = "abinash";

const consonantsArray = input
  .split("")
  .filter((char) => !"aeiou"
  .includes(char));

console.log("Consonants as array:", consonantsArray);
