"use strict";

// let number = 5;
// const leftBorderWidth = 1; //camelCase

// number = 10;
// console.log(number);

// //Exercise 1:
// let userName = "John";
// let userNumber = 25;
// userNumber = 24;

// const obj = {
//   a: 50,
// };
// obj.a = 10;
// console.log(obj);

// //Hosting
// console.log(name);
// var name = "Ivan"; //var = let

// // //
// {
//   let result = 50;
// }

// console.log(result);

//10
// let number = 4.6;

// console.log(-4 / 0);
// console.log("string" * 9);

// const persone = "Alex lorem5";

// const bool = true;

// // console.log(something);

// let und;
// console.log(und);

// //Objects
// const obj = {
//   name: "John",
//   age: 25,
//   isMarried: false,
// };

// // console.log(obj.name)
// console.log(obj['name']);

// //Array
// let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, []];
// console.log(arr[6])

//11
// const arr = [1, 2, 3];

// arr[10] = "3456";

// console.log(arr);
// const obj = { a: 1, b: 2 };

// const arrObj = {
//   a: "a",
//   1: "b",
//   2: "c",
//   abc: {
//     df: [{}, {}],
//     def: {},
//   },
// };
// const b = "b";

// arrObj[b] = '1234'
// arrObj.b = "1234";
// !!! arrObj['b'] = "1234";

// console.log(arrObj.b);

//Exercise 2
// let storeName = "Shop";
// const storeDescription = {
//   budget: 10000,
//   employees: ["Anna", "Alex", "Anton"],
//   products: {
//     note: 200,
//     book: 300,
//   },

//   open: true,
// };

//12

// alert("Hello");
// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Are you 18 yo?", "18");
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt("What is your name?", "");
// answers[1] = prompt("What is your lastname?", "");
// answers[2] = prompt("How old are you?", "");

// console.log(answers);
// console.log(typeof null);

// let arr = [1, 2, 3];
// console.log(typeof arr); // "object"

//13
// const category = "toys";

// console.log(`https://someurl.com/${category}`);

// const user = "name";

// alert(`Privet, ${user}`);

//14
// console.log(4 + +"5");

// let incr = 10,
//   decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

// console.log(2 + 2 * 2 !== "6");

// const isChecked = false,
//   isCLose = false;

// console.log(isChecked || !isCLose);

//19
// if (4 == 9) {
//   console.log("ok!");
// } else {
//   console.log("error");
// }

// const num = 50;

// if (num < 49) {
//   console.log("error");
// } else if (num > 100) {
//   console.log("erorr2");
// } else {
//   console.log("ok");
// }

// (num === 50) ? console.log("ok") : console.log("error");
// 4 + 4 binarbyj argument
// 4 - 4 unarnyj argument

// const num = 50;

// switch (num) {
//   case 49:
//     console.log("nie ok");
//     break;
//   case 100:
//     console.log("nie ok");
//     break;
//   case 51:
//     console.log("ok");
//     break;
//   default:
//     console.log("nie okk");
//     break;
// }

//20

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//   console.log("I'm ok");
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "aaaa");

// if (hamburger === 3 && cola === 1 && fries) {
//   console.log("all");
// } else {
//   console.log("no");
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
//   console.log("all");
// } else {
//   console.log("no");
// }
// console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggets));

// // let jhnReport,
// //   alexReport,
// //   samReport,
// //   mariaReport = "done";

// // console.log(jhnReport || alexReport || samReport || mariaReport);

// console.log(!0);

// console.log(NaN || 2 || undefined); //2 !!
// console.log(NaN && 2 && undefined); //NaN
// console.log(1 && 2 && 3); //3
// console.log((!1 && 2) || !3); //false
// console.log(25 || (null && !3)); //25 !!
// console.log(NaN || null || !3 || undefined || 5); //5
// console.log(NaN || (null && !3 && undefined) || 5); //false !!
// console.log((5 === 5 && 3 > 1) || 5); //true !

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//   console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//   console.log('Done!')
// }

// let hamburger; //undefined
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");
// }

//21

// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

for (let i = 1; i < 10; i++) {
  if (i === 6) {
    break;
  }
  console.log(i);
}

//22
// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }
// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }

//   result += "\n";
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 4; k++) {
//       if (k === 2) break first;
//       console.log(`Third level: ${k}`);
//     }
//   }
// }

// Exercise 3
// function firstTask() {
// let num = 5;
// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// function secondTask() {

// let i = 20;
// while (i >= 10) {
//   if (i === 13) {
//     break;
//   }
//   console.log(i);
//   i--;
// }

// function thirdTask() {
// let i = 2;
// for (i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// function fourthTask() {
// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let i = 2;
// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }
// Место для пятой задачи

// function fifthTask() {
//   const arrayOfNumbers = [];
//   arrayOfNumbers[0] = 5;
//   arrayOfNumbers[1] = 6;
//   arrayOfNumbers[2] = 7;
//   arrayOfNumbers[3] = 8;
//   arrayOfNumbers[4] = 9;
//   arrayOfNumbers[5] = 10;

//   return arrayOfNumbers;
// }

// Exercise 4

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// function firstTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]];

//   // Не трогаем
//   return result;
// }

// Место для второй задачи

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

function secondTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, "Shopping", 20, "Homework"];

  for (i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      console.log(data[i] * 2);
      for (j = 0; j < data.length; j++) {
        if (typeof data[i] === "string") {
          console.log(`"${data[i]} -done"`);
        }
      }
    }
  }

  // Не трогаем
  return data;
}
