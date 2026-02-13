"use strict";
let x = [];
let y = 0;
while (x.length <= 10) {
    x.push(y++);
}

while (x.length > 0) {
    alert(x.pop());
}