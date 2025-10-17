//reverse an array by simple code
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

const arr = [1, 2, 3, 4, 5];
console.log("Reversed array:", reverseArray(arr));

//in one line
const rarry = (arr) => arr.reverse();
const arry = [1, 2, 3, 4, 5];
console.log("Reversed array :", rarry(arry));

//using swap
function rreverse(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

const arrayy = [1, 2, 3, 4, 5];
console.log("Reversed array (in place):", rreverse(arrayy));
