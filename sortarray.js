//using function

function sortArray() {
  let arr = [5, 6, 3, 9, 5];

  arr.sort((a, b) => a - b);

  process.stdout.write("Sorted array: ");
  arr.forEach((num) => process.stdout.write(num + " "));
}

sortArray();
