//check even or odd using function

function CheckOddEven(number) {
  if (number % 2 == 0) {
    console.log("even");
  } else console.log("odd");
}
CheckOddEven(23);

//gratest among 3 numbwes using function declration

function Checkgratest(n1, n2, n3) {
  let greatest;
  if (n1 > n2 && n1 > n3) {
    greatest = n1;
  } else if (n2 > n1 && n2 > n3) {
    greatest = n2;
  } else {
    greatest = n3;
  }
  console.log("Greatest among", n1, n2, n3, "is:", greatest);
}
Checkgratest(2, 3, 4);

//function expression//
// odd and even using function

const xy = function (number) {
  if (number % 2 == 0) {
    console.log("even"); 
  } else console.log("odd");
};
xy(35);

// calculater using function declaration

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;console.log(5 + "9");

    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}
console.log(calculator(19, 12, "+"));

// another methord function expression

const calc = function (num1, num2, operator) {
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "*") {
    return num1 * num2;
  } else if (operator == "/") {
    return num1 / num2;
  } else {
    return "Invalid operator";
  }
};
console.log(calc(19, 12, "*"));
