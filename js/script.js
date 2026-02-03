"use strict";
let z = prompt();
z = z.split(":");
let x = z[0] * 3600;
let y = z[1] * 60;
let v = x + y + z[2];
alert(v);  