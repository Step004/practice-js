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

/*
ЗАДАЧА 2
Використовуй публічний https://thecatapi.com/. Для початку роботи необхідно зареєструватися й отримати унікальний ключ доступу, щоб прикріплювати його до кожного запиту. Заходимо на головну сторінку та натискаємо нижче кнопку Signup for free, дотримуємося інструкції, ключ буде надіслано на вказану пошту.
Колекція порід
Під час завантаження сторінки має виконуватися HTTP-запит за колекцією порід. Для цього необхідно виконати GET-запит на ресурс https://api.thecatapi.com/v1/breeds, що повертає масив об'єктів. У разі успішного запиту, необхідно наповнити select.breed-select опціями так, щоб value опції містило id породи, а в інтерфейсі користувачеві відображалася назва породи.
Напиши функцію fetchBreeds(), яка виконує HTTP-запит і повертає проміс із масивом порід - результатом запиту.
Інформація про кота
Коли користувач обирає якусь опцію в селекті, необхідно виконувати запит за повною інформацією про кота на ресурс https://api.thecatapi.com/v1/images/search. Не забудь вказати в цьому запиті параметр рядка запиту breed_ids з ідентифікатором породи.
Ось як буде виглядати URL-запит для отримання повної інформації про собаку за ідентифікатором породи:
https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи
Напиши функцію fetchCatByBreed(breedId), яка очікує ідентифікатор породи, робить HTTP-запит і повертає проміс із даними про кота - результатом запиту.
*/

const API_KEY =
  'live_wQKrQxv1cCGVxjOn2eUleKvWUCNDtXYDTxIuifv9H7DURRqnSAqVZ4JNaaEkUpyQ';
const URL = 'https://api.thecatapi.com/v1/breeds';
const link = `${URL}?key=${API_KEY}`;

const select = document.querySelector('.breed-select');
const box = document.querySelector('.cat-info');

function fetchBreeds() {
  return fetch(link).then(response => {
    if (!response.ok) {
      throw new Error('не той формат');
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&key=${API_KEY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error('не той формат');
    }
    return response.json();
  });
}

fetchBreeds()
  .then(date => {
    select.innerHTML = addElementsToSelect(date);
  })
  .catch(error => console.log(error));

function addElementsToSelect(element) {
  const result = element.map(
    ({ id, name }) => `<option value="${id}">${name}</option>`
  );
  result.unshift(`<option data-placeholder="true"></option>`);

  return result.join('');
}

function takesValue(event) {
  const breedId = event.target.value;
  fetchCatByBreed(breedId)
    .then(date => {
      box.innerHTML = createMarkup(date);
    })
    .catch(error => console.log(error));
}

select.addEventListener('change', takesValue);

function createMarkup(cat) {
  const { url } = cat[0];

  return `<img src="${url}" alt="cat" width="1280">`;
}
