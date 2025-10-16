// Create 5 objects abd print last 4, first 4 and middle 2 objects
const objects = [
  { id: 1, name: "Alpha" },
  { id: 2, name: "Bingo" },
  { id: 3, name: "Cheasy" },
  { id: 4, name: "Dibya" },
  { id: 5, name: "Esa" },
];

//Print last 4 objects
console.log("Last 4 objects:");
console.log(objects.slice(1));

//Print first 4 objects
console.log("First 4 objects:");
console.log(objects.slice(0, 4));

// Print middle 2 objects (objects at index 1 and 2)
console.log("Middle 2 objects:");
console.log(objects.slice(1, 3));

// using array

// Using push and pop to manipulate arrays

// Print last 4 objects using pop
let lastFour = [];
let tempObjects = [...objects];
tempObjects.pop(); // Remove last object
lastFour = tempObjects; // Remaining 4 objects
console.log("Last 4 objects (using pop):");
console.log(lastFour);

// Print first 4 objects using push
let firstFour = [];
for (let i = 0; i < 4; i++) {
  firstFour.push(objects[i]);
}
console.log("First 4 objects (using push):");
console.log(firstFour);

// Print middle 2 objects using push
let middleTwo = [];
middleTwo.push(objects[1]);
middleTwo.push(objects[2]);
console.log("Middle 2 objects (using push):");
console.log(middleTwo);

// using array

const e = [
  { name: "subhra", reg: 255 },
  { name: "savi", reg: 268 },
  { name: "abhi", reg: 25 },
  { name: "samir", reg: 68 },
];
// Print last 4 objects
console.log("Last 4 objects:");
console.log(e.slice(1));

//Print first 4 objects
// Print first 4 objects
console.log("First 4 objects:");
console.log(e.slice(0, 4));
// Print middle 2 objects (objects at index 1 and 2)
// Print middle 2 objects (objects at index 1 and 2)
console.log("Middle 2 objects:");
console.log(e.slice(1, 3));
console.log("Popped element:");
console.log(e.pop());

// Add a new object at the beginning using unshift
// Add a new object at the beginning using unshift
e.unshift({ name: "new", reg: 100 });
console.log("After unshift:");
console.log(e);

for (let i = 0; i < 4; i++) {
  e.pop();
}

// find prime numbers in array

const arr = [19, 17, 16, 14, 2222, 21];

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const primeFlags = arr.map(isPrime);
console.log("Prime flags:", primeFlags);

// Filter names with 3 or fewer vowels

const names = ["Alexander", "Olivia", "Ethan", "Isabella", "Uma"];

function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

const filteredNames = names.filter((name) => countVowels(name) <= 3);
console.log("Names with 3 or fewer vowels:", filteredNames);
