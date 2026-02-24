"use strict";
let a = prompt();
let b = prompt();
let c = prompt();

alert(dis(a, b, c));
function dis(a, b, c) {

    let d = b*b - 4 * a * c;
    let x = (-b + d**0.5)/(2 * a);
    return x;

}
// ax² + bx + c 