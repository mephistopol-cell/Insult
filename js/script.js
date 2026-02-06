"use strict";
let z = prompt('Введите текст');
let dlina;
let slova = z.split(` `).length;
if (slova >= 150) {
 dlina = "короткий";
}
else if (slova <= 149) {
    dlina = "длинный";
}
let censured = z.replace("Дурак", "цензура");
alert(`В вашем тексте ${slova} букв.
ваш текст ${dlina}
Текст с цензурой: ${censured}
    `  )
