// Declare three variables (var, let, const) and print them in one line.
var a = 5;
let b = 10;
const c = 15;
console.log("Initial values:", a, b, c); // Output: 5 10 15

// Reassign a let variable and print its value before and after reassignment.
console.log("Before reassignment (let):", b);
b = 20;
console.log("After reassignment (let):", b);

// Try to reassign a const variable and observe the error.
console.log("Const before reassignment attempt:", c);
// Uncomment the line below to see the error:
// c = 30; // ❌ TypeError: Assignment to constant variable.

// Declare a var variable inside a block {} and print it outside the block.
{
  var x = 100;
}
console.log("var declared in block (accessible outside):", x); 

// Declare a let variable inside a block {} and try to print it outside the block.
{
  let y = 200;
}
// console.log(y); // ❌ ReferenceError: y is not defined

// Print the sum of two numbers stored in let variables.
let num1 = 7;
let num2 = 8;
let sum = num1 + num2;
console.log("Sum:", sum); // Output: 15

// Find whether the given number is even or odd.
let number = 11;
if (number % 2 == 0) {
  console.log(number + " is even.");
} else {
  console.log(number + " is odd.");
}

// Find the greatest between three numbers.
let n1 = 25,
  n2 = 25,
  n3 = 25;
let greatest;
if (n1 > n2 && n1 > n3) {
  greatest = n1;
} else if (n2 > n1 && n2 > n3) {
  greatest = n2;
} else {
  greatest = n3;
}
console.log("Greatest among", n1, n2, n3, "is:", greatest);

// print sum of numbers fron 1 to 15
let sum1 = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log("Sum from 1 to 15 is:", sum);
