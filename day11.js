//write a program to print alternative elements
//const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//let alternativeElements = [];
//for (let i = 0; i < arr.length; i += 2) {
//alternativeElements.push(arr[i]);
//}
//console.log("Alternative elements:");
//console.log(alternativeElements);

//find gratest number in an array
let arr = [10, 20, 30, 40, 50];
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log("largest number is " + largest);

//using function find largest number in an array
function largesta(arra) {
  let largesta = arra[0];
  for (let i = 1; i < arra.length; i++) {
    if (arra[i] > largesta) {
      largesta = arra[i];
    }
  }
  return largesta;
}
const arra = [234, 54, 34, 76, 97, 34, 887];
console.log(largesta(arra));

// smallest

function largesta(ara) {
  let largesta = ara[0];
  for (let i = 1; i > ara.length; i++) {
    if (ara[i] < largesta) {
      largesta = ara[i];
    }
  }
  return largesta;
}
const ara = [234, 54, 34, 76, 97, 34, 987];
console.log(largesta(ara));

//second largest
function secondLargest(array) {
  let [max, second] = [-Infinity, -Infinity];
  for (let n of array) {
    if (n > max) [second, max] = [max, n];
    else if (n > second && n < max) second = n;
  }
  return second === -Infinity ? null : second;
}

const array = [234, 54, 34, 76, 97, 34, 987];
console.log("Second largest:", secondLargest(array));

//or

//second largest
function secondLargest(arr) {
  let largest = 0;
  let secondLargest = 0;

  for (let i = 0; i < arre.length; i++) {
    if (arre[i] > largest) {
      secondLargest = largest;
      largest = arre[i];
    } else if (arre[i] > secondLargest && arre[i] < largest) {
      secondLargest = arre[i];
    }
  }

  return secondLargest === 0 ? null : secondLargest;
}

const arre = [234, 54, 34, 76, 97, 34, 987];
console.log("Second largest:", secondLargest(arre));
