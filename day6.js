console.log(x);
x = 10; // error
{
  var x = 25;
  console.log(x);
}
console.log(x);
// print a table of 9 till 9*20
//var i = 1;
for (let i = 1; i <= 20; i++) {
  //console.log("9 *", i, "= ", 9 * i);
  console.log(`9 x ${i} =  ${9 * i}`);
}
// find the factorial of a number
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i; //factorial=factorial*i
  console.log("fact orial of", num, "is:", factorial);
}
console.log("factorial of", num, "is:", factorial);
// to print only odd numbers between 1 to 100
for (let i = 1; i <= 100; i++)
  if (i % 2 != 0) {
    console.log(i);
  }
// to print only odd numbers between 1 to 100 in 2 lines code
for (let i = 1; i <= 100; i++) if (i % 2 != 0) console.log(i);
//write a program to find power of 2 power 18
let result = 1;
let base = 2;
let power = 18; //2^18
for (let i = 1; i <= power; i++) {
  result = result * base; //result*=base
}
console.log(base + " power " + power + " is:", result);
//find power of 2 power 1 to 2 power 20

let num1 = 1;
let base1 = 2;
let power1 = 20;
for (let i = 1; i <= power1; i++) {
  num1 = num1 * base1;
  console.log(base1 + " power " + i + " is:", num1);
}
// sum 2 numbers using function
console.log(sum(5, 6));

function sum(a, b) {
  return a + b;
}
console.log(sum(5, 6));

//print in for loop up to 10 but the print will stop at 5 then start from 6 to 10

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
//prime number ckacker
var n = 17;

if (n <= 1) {
  console.log("Not prime");
} else {
  isPrime = true;

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log("Prime");
  } else {
    console.log("Not prime");
  }
}
