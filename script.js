"use strict";

// Задача №1---------------------------------------------/

// let user = localStorage.getItem("userData");
// if (user) {
//   console.log(JSON.parse(user));
// } else {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => response.json())
//     .then((result) => {
//       localStorage.setItem("userData", JSON.stringify(result));
//     })
//     .catch((error) => console.error(error));
// }

// Задача №2----------------------------------------------/

// function isValidDateFormat(str) {
//   let regexp = /^\d{4}\/\d{2}\/\d{2}\s\d{2}:\d{2}$/;
//   return regexp.test(str);
// }
// console.log(isValidDateFormat("2012/09/18 12:10"));
// console.log(isValidDateFormat("12.02.2022 12:10"));

// Задача №3----------------------------------------------/

// function isAfter(firstDate, secondDate) {
//   return firstDate > secondDate;
// }

// console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11)));
// console.log(isAfter(1648636135000, 1648549735000));
// console.log(isAfter(1648549735000, 1648636135000));
