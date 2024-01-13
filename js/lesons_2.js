// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// // Джаз, Блюз
// // Джаз, Блюз, Рок-н-ролл
// // Джаз, Классика, Рок-н-ролл
// // Классика, Рок-н-ролл
// // Рэп, Регги, Классика, Рок-н-ролл
// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles.splice(1, 1, "Классика");
// const first = styles.shift();
// console.log(first);
// styles.unshift("Рэп", "Регги");
// console.log(styles);


// ЗАДАЧА 2
// Напишіть ф-цію logItems(array) , яка буде получати масив і використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// function logItems (array) {
//     const newArray = ['Mango', 'Poly', 'Ajax']
//     for (let i = 0; i < newArray.length; i++) {
//         console.log(i, newArray[i])
//     }
// }

// logItems()

// ЗАДАЧА 3
// // Напишіть код , який шукає саме найменше число в масиві
// // 1) напишіть циклом for

//     // 2) перепишіть функцією findSmallestNumber(numbers)

//  console.log(getnum([2, 17, 94, 1, 23, 37]));
//  console.log(getnum([49, 4, 83, 7, 12]));

// // const numbers = [2, 17, 94, 1, 23, 37];
// function getnum(number) {
//     let smalnum = number[0];
//     for (const a of number) {
//         if (smalnum > a) {
//             smalnum = a
//         }
            
//     }
//     return smalnum;
//     }

// ЗАДАЧА 4
//  Провірте , чи являється рядок полідромом
// const str = "ротатор";//true
// const newString = "Hello";//false
// const newstr = newString.split("").reverse().join("")
// console.log(newString === newstr);

// const scientists = [
//     {
//       name: "Albert",
//       surname: "Einstein",
//       born: 1879,
//       dead: 1955,
//       id: 1,
//     },
//     {
//       name: "Isaac",
//       surname: "Newton",
//       born: 1643,
//       dead: 1727,
//       id: 2,
//     },
//     {
//       name: "Galileo",
//       surname: "Galilei",
//       born: 1564,
//       dead: 1642,
//       id: 3,
//     },
//     {
//       name: "Marie",
//       surname: "Curie",
//       born: 1867,
//       dead: 1934,
//       id: 4,
//     },
//     {
//       name: "Johannes",
//       surname: "Kepler",
//       born: 1571,
//       dead: 1630,
//       id: 5,
//     },
//     {
//       name: "Nicolaus",
//       surname: "Copernicus",
//       born: 1473,
//       dead: 1543,
//       id: 6,
//     },
//     {
//       name: "Max",
//       surname: "Planck",
//       born: 1858,
//       dead: 1947,
//       id: 7,
//     },
//     {
//       name: "Katherine",
//       surname: "Blodgett",
//       born: 1898,
//       dead: 1979,
//       id: 8,
//     },
//     {
//       name: "Ada",
//       surname: "Lovelace",
//       born: 1815,
//       dead: 1852,
//       id: 9,
//     },
  
//     {
//       name: "Lise",
//       surname: "Meitner",
//       born: 1878,
//       dead: 1968,
//       id: 11,
//     },
//     {
//       name: "Sarah E.",
//       surname: "Goode",
//       born: 1855,
//       dead: 1905,
//       id: 10,
//     },
//     {
//       name: "Hanna",
//       surname: "Hammarström",
//       born: 1829,
//       dead: 1909,
//       id: 12,
//     },
// ];
//   1)получити масив вчених які народились у 19ст;
// const result = scientists.filter(scientist => scientist.born >= 1800 && scientist.born < 1900)
//     .map(scientist => `${scientist.name} ${scientist.surname}`);
// console.log(result);
// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;

// const result = scientists.reduce((acc, year) => acc + (year.dead - year.born), 0);

// console.log(result/scientists.length);

// 3)відсортувати по алфавіту;

// const result = scientists.toSorted((a, b) => (a.name > b.name) ? 1 : -1)
// console.log(result);

// 4)відсортувати по кількості прожитих років;

// const result = scientists.toSorted((a, b) => (a.dead - a.born) - (b.dead - b.born))
// console.log(result);
// 5) відфільтрувати, хто народився в 15, 16, 17ст;
// const a = scientists.filter(scientist => scientist.born >= 1400 && scientist.born < 1700)
// console.log(a)
//
// 6)знайти рік народження Albert Einstein;
// const b = scientists.find(scientist => scientist.name === "Albert" && scientist.surname === "Einstein")
// console.log(b.born)

// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) -приймає імя та ціну товару, а також колбек.Функція створює обєкт товару, добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, showProduct);

// function makeProduct(name, price, callback) {
//     const product = { name, price, id: Date.now() }
//     callback(product)
// }
// function showProduct(product) {
//     console.log(product);
// }

// ЗАДАЧА 9
// Напишіть функцію для роботи з колекцією навчаючих курсів courses:

// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName)- змінює імя на нове
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(name) {
//     if (courses.includes(name)) {
//         console.log('У вас уже є такий курс')
//     }
//     else {
//         courses.push(name)
//     }
// }

// function removeCourse(name) {
//     const index = courses.indexOf(name)
//     if (index === -1) {
//         console.log('Курс з таким іменем не найдено')
//     }
//     else {
//         courses.splice(index, 1)
//     }
// }

// function updateCourse(oldName, newName) {
//     const index = courses.indexOf(oldName)
//     courses.splice(index, 1, newName)
// }

// addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'У вас уже є такий курс'
// removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс з таким іменем не найдено'
// updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(courses);

// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"), і логінувати рядок "Привіт, <імя>".У випадку , відсутнього
// відсутнього значення, виводе аргумент "Привіт , гість"
// // console.log(greet("Василь"));//Привіт Василь
// // console.log(greet());//Привіт гість

// ЗАДАЧА 7
// Виконайте рефакторинг замінивши обявлення ф-ції з function declaration на function expression та на стрілочну функцію
// // function checkNumbers(a, b) {
// //   if (a > b) {
// //     return `число ${a} більше ${b}`;
// //   }

// //   return `число ${b} більше ${a}`;
// // }


// ЗАДАЧА 8
// Напишіть ф-цію capitalize , яка буде приймати рядок і буде повертати новий рядок , де кожне слово буде з великої букви
// // capitalize('the quick brown fox')// 'The Quick Brown Fox '

// ЗАДАЧА 1
// Напишіть скрипт,для обєкта user в послідовності:

//  добавляє поле mood із значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення  premium на false
// виводить отримане обєкта user в форматі ключ:значення використовуючи  Object.keys() и for...of

//  const user = {
//    name: "Mango",
//    age: 20,
//    hobby: "html",
//    premium: true,
// };



// ЗАДАЧА 2
// У вас є обєкт , у якому зберігаються зарплати нашої команди.
// Напишіть код , для підрахунку всіх зарплат і збережіть результат в змінні sum
// Повинно получитись 390, якщо обєкт salaries пустий , то результат буде 0
// ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ ЛОГІКУ, ТОМУ ПИШЕМО ФУНКЦІЮ


//  const salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130,
// };
 
// ЗАДАЧА 3
// Створи обєкт calculator(калькулятор) з 3-ма методами:
// read()- запитує 2 значення у юзера і зберігає їх як значення обєкта;
// sum() -повертає суму збережених значень; 
// mult() -перемножує значення збережені і повертає результат;

//  const calculator = {
//  a: null,
//  b: null,

//   read() {},

//   sum() {},

//   mult() {},
// };


// calculator.read();
// console.log(`sum`, calculator.sum());
// console.log(`mult`, calculator.mult());