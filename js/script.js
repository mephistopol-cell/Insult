"use strict";
let z = prompt('Введите текст');
let slova = z.split(` `).length;
let censured = z.replaceAll("Дурак", "цензура").replace("ишак", "цензура").replaceAll("дурак", "цензура")
alert(`В вашем тексте ${slova} слов.
ваш текст ${(slova <= 150) ? "короткий" : "длинный"}
Текст с цензурой: ${censured}
    `  )
