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

//let month = Number(prompt("Введіть місяць вашого народження"));
//if (month === 1 || month === 12 || month === 2) {
 //   alert("Ви народились взимку");
//} else if (month >= 3 && month <= 5) {
  //  alert("Ви народились весною");
//} else if (month >= 6 && month <= 8) {
  //  alert("Ви народились влітку");
//} else if (month >= 9 && month <= 11) {
    //alert("Ви народились восени");
//} else { alert("Дані введено не віроно") };


//ЗАДАЧА 6
//НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ , ЩО НЕ ВІРНИЙ ЛОГІН

//const login = "kkk";
//const password = "lll";
// let userLogin = prompt('введіть свій логін');
// let userPassword = prompt('введіть свій пароль');

// //if (login == userLogin && password == userPassword) {
//     alert('Вітаємо')
// //} else {
//     alert('Помилка')
// //}
// const message = login == userLogin && password == userPassword ? "Вітаємо" : "Помилка";
// console.log(message);

// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ( SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99

// let price = prompt("Введіть період підписки").toUpperCase();

// switch (price) {
//   case "ДЕНЬ": 
//   console.log("Ціна 1.99")
//   break;
//   case "НЕДІЛЯ":
//     console.log("Ціна 5.99")
//     break;
//     case "МІСЯЦЬ":
//       console.log("Ціна 10.99")
//       break;
//       case "РІК":
//         console.log("Ціна 100.99")
//         break;
//         default:
//           console.log("Error");
// }

// ЗАДАЧА 8
// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ , ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!" , ЯКЩО МЕНШЕ 7 
// "Your name isn't very long"

let name = 'Artem'

if (name.length > 7) {
  console.log ('Wow, you  have a REALLY long name!')
}
else {
  console.log ('Your name isn`t very long')
}