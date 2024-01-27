// Створіть карточки товару з масиву використовуючи createElement
// import car from './data/cars.js';

// const list = document.querySelector(".js-goods");

// function createCard ({name, img, price, description}) {
// const listItem = document.createElement("li");
// const text = document.createElement("h2");
// const picture = document.createElement("img");
// const priceCar = document.createElement("p");
// const textDes = document.createElement("p");

// text.textContent = name;
// picture.src = img;
// picture.alt = name;
// picture.width = 320;
// priceCar.textContent = price;
// textDes.textContent = description;

// listItem.append(text, picture, priceCar, textDes);

// return listItem;
// }

// const card = car.map(createCard);
// console.log(card);

// list.append(...card);

// ЗАДАЧА 2
// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
//2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ , ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН    <button class="btn">Calculate</button>
// 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ
const randomRgbColor = () => {
  const r = Math.round(Math.random() * (255 - 1) + 1);
  const g = Math.round(Math.random() * (255 - 1) + 1);
  const b = Math.round(Math.random() * (255 - 1) + 1);
  return `rgb(${r},${g},${b})`;
};

const form = document.querySelector('.form');
const priceInput = document.querySelector('#price');
const quantityInput = document.querySelector('#quantity');
const finalPrice = document.querySelector('.total');
const amount = document.querySelector('.amount');
const formBox = document.querySelector('.container');

const color = randomRgbColor();
formBox.style.backgroundColor = color;

function calculator(event) {
  event.preventDefault();
  const price = priceInput.value;
  const quantity = quantityInput.value;
  const sum = price * quantity;
  finalPrice.textContent = sum;
}

form.addEventListener('submit', calculator);
form.addEventListener('input', a);

function a() {
  const quantity = quantityInput.value;
  amount.textContent = quantity;
}
