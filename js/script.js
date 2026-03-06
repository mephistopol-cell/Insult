"use strict";

// function roots(a, b, c) {

//     let d = b*b - 4 * a * c;
//     let x = (-b + d**0.5)/(2 * a);
//     return x;
// }
document.body.querySelector('.plu').addEventListener("click", () => {
let a = Number(document.querySelector(".one").value);
let b = Number(document.querySelector(".two").value);
let elem = document.createElement("div")
elem.textContent = a + b;
document.body.append(elem);

})
document.body.querySelector('.min').addEventListener("click", () => {
let a = Number(document.querySelector(".one").value);
let b = Number(document.querySelector(".two").value);
let elem = document.createElement("div")
elem.textContent = a - b;
document.body.append(elem);

})
document.body.querySelector('.ras').addEventListener("click", () => {
let a = Number(document.querySelector(".one").value);
let b = Number(document.querySelector(".two").value);
let elem = document.createElement("div")
elem.textContent = a / b;
document.body.append(elem);
})
document.body.querySelector('.umn').addEventListener("click", () => {
let a = Number(document.querySelector(".one").value);
let b = Number(document.querySelector(".two").value);
let elem = document.createElement("div")
elem.textContent = a / b;
document.body.append(elem);

})