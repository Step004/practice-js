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

const scientists = [
    {
      name: "Albert",
      surname: "Einstein",
      born: 1879,
      dead: 1955,
      id: 1,
    },
    {
      name: "Isaac",
      surname: "Newton",
      born: 1643,
      dead: 1727,
      id: 2,
    },
    {
      name: "Galileo",
      surname: "Galilei",
      born: 1564,
      dead: 1642,
      id: 3,
    },
    {
      name: "Marie",
      surname: "Curie",
      born: 1867,
      dead: 1934,
      id: 4,
    },
    {
      name: "Johannes",
      surname: "Kepler",
      born: 1571,
      dead: 1630,
      id: 5,
    },
    {
      name: "Nicolaus",
      surname: "Copernicus",
      born: 1473,
      dead: 1543,
      id: 6,
    },
    {
      name: "Max",
      surname: "Planck",
      born: 1858,
      dead: 1947,
      id: 7,
    },
    {
      name: "Katherine",
      surname: "Blodgett",
      born: 1898,
      dead: 1979,
      id: 8,
    },
    {
      name: "Ada",
      surname: "Lovelace",
      born: 1815,
      dead: 1852,
      id: 9,
    },
  
    {
      name: "Lise",
      surname: "Meitner",
      born: 1878,
      dead: 1968,
      id: 11,
    },
    {
      name: "Sarah E.",
      surname: "Goode",
      born: 1855,
      dead: 1905,
      id: 10,
    },
    {
      name: "Hanna",
      surname: "Hammarström",
      born: 1829,
      dead: 1909,
      id: 12,
    },
];
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
const b = scientists.find(scientist => scientist.name === "Albert" && scientist.surname === "Einstein")
console.log(b.born)