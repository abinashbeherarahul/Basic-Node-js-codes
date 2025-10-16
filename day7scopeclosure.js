let a = 5;
{
  console.log(a);
  {
    console.log(a);
    {
      console.log(a);
    }
  }
}
// closure inculding inner and outer
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
let fn = outer();
fn();
fn();
fn();
fn();
fn();
// using closure for counter
let counter = (function () {
  let count = 0;
  return function () {
    count++;
    return count;
  };
})();
