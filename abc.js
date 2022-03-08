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
QQQQQQQQQQQQQQQQQQQ
same bracnh i Github
