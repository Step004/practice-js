// // ЗАДАЧА 1
// // НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"
// let name = "Stepan";
// let age = 19;
// let hobby = "JAVASCRIPT";
// const message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${hobby}`;
// console.log(message);

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

let name = prompt("Введіть своє ім'я");
let emailAdress = prompt ("Введіть свою електронну пошту");
let numberPhone = prompt ("Введіть свій номер телефону");

const message2 = `КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ ${emailAdress} ПОЧТУ І ${numberPhone} ТЕЛЕФОН`;
console.log(message2);
