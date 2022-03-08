let globalVar = "global";
function addFive(num) {
  globalVar = "nonono";
  function add(num) {
    num = globalVar;
    return num + "NONONO";
  }
  // globalVar='inFunctionl'
  return add(num);
}
// console.log(add(3,3));
console.log(globalVar);
console.log(addFive(10));
console.log(globalVar);
// console.log(add());
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

+++++++++++++++++++++++++++++++++++++++