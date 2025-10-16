//write these in one code function declaration - substraction , fuction expression - addition , arrow implicit multiplication, arrow explicit division

// Function Declaration - Subtraction
function subtract(a, b) {
  return a - b;
}

// Function Expression - Addition
const add = function (a, b) {
  return a + b;
};

// Arrow Function (Implicit Return) - Multiplication
const multiply = (a, b) => a * b;

// Arrow Function (Explicit Return) - Division
const divide = (a, b) => {
  return a / b;
};

const cubeVolume = (side) => side ** 3;
const side = 5;
console.log(`Volume of the cube: ${cubeVolume(side)}`);
// create a object of 4 property modify any 2 using spread operator
const person = {
  name: "John",
  age: 30,
  city: "balasore",
  occupation: "Developer",
};

person.age = 31;
person.city = "bbsr";

console.log(person);

// create a object of 4 property modify any 2 using spread operator
const originalPerson = {
  name: "John",
  age: 30,
  city: "balasore",
  occupation: "Developer",
};
const updatedPerson = {
  ...originalPerson,
  age: 31,
  city: "BBSR",
};
console.log(updatedPerson);
// assign the properties to new variable names and provide default values properties that might not exist in the object.
const { name, age, country = "India" } = originalPerson;
console.log(age);
console.log(country);
