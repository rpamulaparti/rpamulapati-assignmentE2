// eq1.js
const number = document.getElementById("num");
const ans = document.querySelector("P");
const result = document.getElementById("result");

ans.onclick = function (e) {
let numValue= parseInt(number.value);
result.textContent =`${numValue} x ${numValue}  = ${numValue*numValue}`
};