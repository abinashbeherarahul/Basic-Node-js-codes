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
