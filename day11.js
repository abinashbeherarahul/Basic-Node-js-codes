//write a program to print alternative elements
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let alternativeElements = [];
for (let i = 0; i < arr.length; i += 2) {
  alternativeElements.push(arr[i]);
}
console.log("Alternative elements:");
console.log(alternativeElements);
