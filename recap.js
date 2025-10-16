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
