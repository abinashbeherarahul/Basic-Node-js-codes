//factorial of a number
let num = 5;
let factorial = 1;
for (i = 1; i <= num; i++) {
  factorial *= i;
}
console.log("factorial of ", num, "is ", factorial);
//print odd number
for (i = 1; i <= 100; i++) {
  if (i % 2 != 0) console.log(i);
}

console.log("9" - 7);

//write these in one code function declaration - substraction , fuction expression - addition , arrow implicit multiplication, arrow explicit division

// Function Declaration - Subtraction
function subtract(a, b) {
  return a - b;
}

// Function Expression - Addition
const add = function(a, b) {
  return a + b;
};

// Arrow Function (Implicit Return) - Multiplication
const multiply = (a, b) => a * b;

// Arrow Function (Explicit Return) - Division
const divide = (a, b) => {
  return a / b;
};
