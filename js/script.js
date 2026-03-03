"use strict";

function roots(a, b, c) {

    let d = b*b - 4 * a * c;
    let x = (-b + d**0.5)/(2 * a);
    return x;
}
document.body.querySelector('button').addEventListener("click", () => {
    let a = Number(document.querySelector(".one").value);
let b = Number(document.querySelector(".two").value);
let c = Number(document.querySelector(".three").value);
document.querySelector('.res').style.font = "32pt"
document.querySelector('.res').textContent = roots(a, b, c)

})