"use strict";

// function roots(a, b, c) {

//     let d = b*b - 4 * a * c;
//     let x = (-b + d**0.5)/(2 * a);
//     return x;
// }
// document.body.querySelector('.plu').addEventListener("click", () => {
// let a = Number(document.querySelector(".one").value);
// let b = Number(document.querySelector(".two").value);
// let elem = document.createElement("div")
// elem.textContent = a + b;
// document.body.append(elem);

// })
// document.body.querySelector('.min').addEventListener("click", () => {
// let a = Number(document.querySelector(".one").value);
// let b = Number(document.querySelector(".two").value);
// let elem = document.createElement("div")
// elem.textContent = a - b;
// document.body.append(elem);

// })
// document.body.querySelector('.ras').addEventListener("click", () => {
// let a = Number(document.querySelector(".one").value);
// let b = Number(document.querySelector(".two").value);
// let elem = document.createElement("div")
// elem.textContent = a / b;
// document.body.append(elem);
// })
// document.body.querySelector('.umn').addEventListener("click", () => {
// let a = Number(document.querySelector(".one").value);
// let b = Number(document.querySelector(".two").value);
// let elem = document.createElement("div")
// elem.textContent = a / b;
// document.body.append(elem);

// })
let data = {
    'tasks': [
        {
            "name": "задача 1",
            "status": 'x'
        },
        {
            "name": "задача 2",
                "status": 'x'
        }
    ]
}
document.querySelector('.add').addEventListener("click", () => {
    let text = document.querySelector(".brbr").value;
    let task = { "name": text, "status": "X" };
    data.tasks.push(task);
    let elem = document.createElement("li");
    elem.textContent = text;
    let check = document.createElement("input");
    check.type = "checkbox";
    elem.append(check);

    document.querySelector(".tasks").append(elem);

})
document.querySelector(".save").addEventListener("click", () => {
    localStorage.setItem("tasks", JSON.stringify(data));
});
document.querySelector(".load").addEventListener("click", () => {
    data = JSON.parse(localStorage.getItem("tasks"));
    
});
document.addEventListener('DOMContentLoaded', () => {
    
})
