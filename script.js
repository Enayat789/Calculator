function allClear() {
  //   alert("hloo");
  document.getElementById("display").value = "";
}

function displayresult(value) {
//   alert(value);
  document.getElementById("display").value += value;
}

// function displayBack(value){
//     document.getElementById("display").slice(0, -1)= value;
// }

const arr = [1, 2, 3, 4, 5, 6, "dog"];

console.log(arr.slice(-2,1));

function calculate() {
  var p = document.getElementById("display").value;
  var q = eval(p);
  document.getElementById("display").value = q;
}

// function displaySeven() {
//   document.getElementById("display").value += 7;
// }

// function displayEight() {
//   document.getElementById("display").value += 8;
// }
// function displayNine() {
//   document.getElementById("display").value += 9;
// }
// function displayFour() {
//   document.getElementById("display").value += 4;
// }
// function displayFive() {
//   document.getElementById("display").value += 5;
// }
// function displaySix() {
//   document.getElementById("display").value += 6;
// }
// function displayOne() {
//   document.getElementById("display").value += 1;
// }
// function displayTwo() {
//   document.getElementById("display").value += 2;
// }
// function displayThree() {
//   document.getElementById("display").value += 3;
// }
// function displayZero() {
//   document.getElementById("display").value += 0;
// }
// function displayDot() {
//   document.getElementById("display").value += ".";
// }
// function displayAdd() {
//   document.getElementById("display").value += "+";
// }
// function displayDivision() {
//   document.getElementById("display").value += "/";
// }
// function displayPercent() {
//   document.getElementById("display").value += "%";
// }
// function displayMultiply() {
//   document.getElementById("display").value += "*";
// }
// function displaySubtract() {
//   document.getElementById("display").value += "-";
// }
