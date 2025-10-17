//write a program to sort an array from 1 to n in ascending order
function shortarray() {
  let arr = [5, 6, 3, 9, 5];
  arr.sort((a, b) => a - b);

  process.stdout.write("sorted array");
  arr.forEach((num) => process.stdout.write(num + ""));
}
sortarray();

//using logic
function sortarray() {
  let arr = [5, 6, 3, 9, 5];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  process.stdout.write("sorted array");
  arr.forEach((num) => process.stdout.write(num + ""));
}
sortarray();
