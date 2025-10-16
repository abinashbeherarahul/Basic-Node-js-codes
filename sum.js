// Filter names with 3 or fewer vowels

const names = ["Ayush", "alibia", "rothan", "Isabella", "Uma"];

function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

const filteredNames = names.filter((name) => countVowels(name) <= 3);

filteredNames.pop();
console.log("After pop operation:", filteredNames);
