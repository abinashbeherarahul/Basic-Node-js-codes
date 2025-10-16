//swaping without  third variable using arrow function
let x = 20;
let y = 30;
((x, y) => {
  x = x + y;
  y = x - y;
  x = x - y;
  console.log(" x =", x, ", y =", y);
})(x, y);

//write using arrow function sum of 2 number
const sumFunction = (a, b) => {
  return a + b;
};
console.log("sum of 2 number is:", sumFunction(5, 6));

//write using arrow function sum of 2 number inplisit return

const sum = (a, b) => a + b;
console.log("sum of 2 number is:", sum(5, 6));

//write using arrow function sum of 2 number using no parameter

const sum1 = () => 5 + 6;
console.log("sum of 2 number is:", sum1());

//write using arrow function power number
const power = (base, power) => {
  let result = 1;
  for (let i = 1; i <= power; i++) {
    result *= base; //result=result*base
  }
  console.log(base + " power " + power + " is:", result);
};

//write using arrow function power of  number no parameter
const power1 = () => {
  let result = 1;
  let base = 2;
  let power = 18;
  for (let i = 1; i <= power; i++) {
    result *= base; //result=result*base
  }
  console.log(base, "power", power, "is", result);
};
