// // ЗАДАЧА 1
// // НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"
// let name = "Stepan";
// let age = 19;
// let hobby = "JAVASCRIPT";
// const message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${hobby}`;
// console.log(message);

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

//let name = prompt("Введіть своє ім'я");
//let emailAdress = prompt ("Введіть свою електронну пошту");
//let numberPhone = prompt ("Введіть свій номер телефону");

//const message2 = `КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ ${emailAdress} ПОЧТУ І ${numberPhone} ТЕЛЕФОН`;
//console.log(message2);


//ЗАДАЧА 3
//ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ: 
//"СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ 
//"НЕ ЗНАЄТЕ? 12"

//let total = Number(prompt("скільки місяців має рік"));
//if (total === 12) {
//    alert("Вірно")
//} else {
 //   alert("Нe ЗНАЄТЕ? 12")
 //   console.log(`Ви ввели ${total} а насправді 12 місяців`) 
//}

// ЗАДАЧА 4
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ВИЗНАЧАТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО , ЧИ НЕ ПАРНЕ.

// let number = Number(prompt('Введіть число'))

// // if (number % 2 === 0) {
// //     console.log ("Ціле число")
// // } else {
// //     console.log ("Число є нецілим")
// // }

// let message = number % 2 === 0 ? "Ціле число" : "Число не є цілим"

// console.log(message)

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

let month = Number(prompt("Введіть місяць вашого народження"));
if (month === 1 || month === 12 || month === 2) {
    alert("Ви народились взимку");
} else if (month >= 3 && month <= 5) {
    alert("Ви народились весною");
} else if (month >= 6 && month <= 8) {
    alert("Ви народились влітку");
} else if (month >= 9 && month <= 11) {
    alert("Ви народились восени");
} else { alert("Дані введено не віроно") };
