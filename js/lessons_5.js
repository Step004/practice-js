// ЗАДАЧА 1
// Створити сторінку з двома кнопками: "Старт" та "Стоп". При кліці на кнопку "Старт" розпочинається безперервний цикл, який кожну секунду змінює фоновий колір сторінки на випадковий шестнадцятковий колір та вимикає кнопку "Старт" до завершення циклу. Коли натискається кнопка "Стоп", цикл зупиняється, і кнопка "Старт" стає доступною для подальших кліків. Для реалізації використовується HTML для створення сторінки з кнопками та JavaScript код для взаємодії з цими елементами та виконання зазначених функцій.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }

// const btnStart = document.querySelector("button[data-start]");
// const btnStop = document.querySelector("button[data-stop]");

// let timerId = null;

// btnStart.addEventListener("click", ()=>{
// timerId = setInterval(() => {
//     document.body.style.backgroundColor = getRandomHexColor();
//     btnStart.disabled = true;
// }, 1000) 
// });


// btnStop.addEventListener("click", () => {
//     clearInterval(timerId);
//     btnStart.disabled = false;
// })
