// function readNumber() {
//   let value;
//   do {
//     value = +prompt("insert num", 0);
//     if (value === null || value === "") return null;
//   } while (!isFinite(value));
//   return value;
// }
// readNumber();

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min) * 1e10) * 1e-10 + min;
// }
// alert(random(3, 7));
// alert(random(10, 15));
// alert(random(-15, -14));

// function randomInteger(min, max) {
//   return Math.round(Math.random() * (max - min + 1) + min - 0.5);
// }
// alert(randomInteger(3, 7));
// alert(randomInteger(10, 15));
// alert(randomInteger(-15, -14));

// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst("1111"));

// function checkSpam(str) {
//   return (
//     str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")
//   );
// }
// console.log(
//   checkSpam("buy ViAgRA now") == true,
//   checkSpam("free xxxxx") == true,
//   checkSpam("innocent rabbit") == false
// );

// function truncate(str, maxlength) {
//   if (str.length <= maxlength) return str;
//   return str.slice(0, maxlength - 1) + "...";
// }
// console.log(
//   truncate("Вот, что мне хотелось бы сказать на эту тему:", 20),
//   truncate("Всем привет!", 20)
// );

// function extractCurrencyValue(value) {
//   return +value.slice(1);
// }
// alert(extractCurrencyValue("$120") === 120);

// let styles = ["Jazz", "Blues"];
// console.log(styles);
// styles.push("Rock-n-roll");
// console.log(styles);
// styles[Math.trunc(styles.length / 2)] = "Classic";
// console.log(styles);
// alert(styles.shift());
// console.log(styles);
// styles.unshift("Rap", "Raggy");
// console.log(styles);

// function sumInput() {
//   let values = [];
//   do {
//     let value = +prompt("insert number", 0);
//     if (value === null || value === "" || isNaN(value)) break;
//     values.push(value);
//   } while (true);
//   alert(values);
//   let sum = 0;
//   for (let value of values) {
//     sum += value;
//   }
//   return sum;
// }
// alert(sumInput());

// arr = [1, -2, 3, 4, -9, 6];
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11;
// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let currentSum = 0;
//   for (let num of arr) {
//     maxSum = maxSum > num ? maxSum : num;
//     currentSum = currentSum + num > 0 ? currentSum + num : 0;
//     maxSum = maxSum > currentSum ? maxSum : currentSum;
//   }
//   return maxSum;
// }
// console.log(getMaxSubSum([-1, 2, 3, -9]));
// console.log(getMaxSubSum([2, -1, 2, 3, -9]));
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
// console.log(getMaxSubSum([-2, -1, 1, 2]));
// console.log(getMaxSubSum([100, -9, 2, -3, 5]));
// console.log(getMaxSubSum([1, 2, 3]));

// function camelize(str) {
//   return str
//     .split("-")
//     .map((el) => el[0].toUpperCase() + el.slice(1))
//     .join("");
// }
// console.log(camelize("hello-org-to-up"));

// function filterRange(arr, a, b) {
//   return arr.filter((item) => item >= a && item <= b);
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert(filtered);
// alert(arr);

// function filterRangeInPlace(arr, a, b) {
//   arr.splice(
//     0,
//     arr.length,
//     arr.filter((elem) => elem >= a && elem <= b)
//   );
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// alert(arr);

// let arr = [5, 2, 1, -10, 8];
// function sortDescent(arr) {
//   return arr.sort((a, b) => b - a);
// }
// alert(sortDescent(arr));

// function copySorted(arr) {
//   let copy = [].concat(arr);
//   return copy.sort((a, b) => a.localeCompare(b));
// }
// //right version
// // function copySorted(arr) {
// //     return arr.slice().sort();
// //   }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert(sorted);
// alert(arr);

// function Calculator() {
//   this.calculate = function (str) {
//     const expression = str.split(" ");
//     this.a = +expression[0];
//     this.b = +expression[2];
//     this.operator = expression[1];
//     if (!this[this.operator] || isNaN(this.a) || isNaN(this.b)) {
//       return NaN;
//     }
//     return this[this.operator](this.a, this.b);
//   };
//   this.operator = undefined;
//   this["+"] = function (a, b) {
//     return a + b;
//   };
//   this["-"] = function (a, b) {
//     return a - b;
//   };
//   this.addMethod = function (name, func) {
//     this[name] = func;
//   };
// }
// const calculator = new Calculator();
// console.log(calculator.calculate("3 + 1"));
// console.log(calculator.calculate("7 - 1"));
// calculator.addMethod("*", (a, b) => a * b);
// console.log(calculator.calculate("6 * 4"));
// calculator.addMethod("/", (a, b) => a / b);
// console.log(calculator.calculate("6 / 4"));
// calculator.addMethod("**", (a, b) => a ** b);
// console.log(calculator.calculate("6 ** 4"));
// console.log(calculator.calculate("6 *-* 4"));
// console.log(calculator.calculate("u ** 4"));
// console.log(calculator.calculate("6 ** p"));

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [vasya, petya, masha]
// let names = users.map((user) => user.name);
// alert(names); // Вася, Петя, Маша

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [vasya, petya, masha];
// let usersMapped = users.map((user) => {
//   return { fullName: user.name + " " + user.surname, id: user.id };
// });
// alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullName); // Вася Пупкин

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let arr = [vasya, petya, masha];
// function sortByAge(arr) {
//   arr.sort((a, b) => a.age - b.age);
// }
// sortByAge(arr);
// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// function shuffle(arr) {
//   let randoms = [];
//   for (i = 0; i < arr.length; i++) {
//     let randNum;
//     do {
//       randNum = Math.trunc(Math.random() * arr.length);
//     } while (randoms.includes(randNum));
//     randoms.push(randNum);
//   }
//   arr.splice(0, arr.length + 1, ...randoms.map((num) => arr[num]));
// }
// let count = {
//   123: 0,
//   132: 0,
//   213: 0,
//   231: 0,
//   321: 0,
//   312: 0,
// };
// for (let i = 0; i < 100000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join("")]++;
// }
// for (let key in count) {
//   console.log(`${key}: ${count[key]}`);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [vasya, petya, masha];
// function getAverageAge(arr) {
//   let sum = arr.reduce((sum, current) => sum + current.age, 0);
//   console.log(sum);
//   return sum / arr.length;
// }
// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// function unique(arr) {
//   let unique = [];
//   arr.forEach((element) => {
//     if (unique.includes(element)) return;
//     unique.push(element);
//   });
//   return unique;
// }
// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-O",
// ];
// alert(unique(strings)); // кришна, харе, :-O

// let users = [
//     { id: "john", name: "John Smith", age: 20 },
//     { id: "ann", name: "Ann Smith", age: 24 },
//     { id: "pete", name: "Pete Peterson", age: 31 },
//   ];
//   function groupById(users) {
//     return users.reduce((acc, user) => {
//       acc[user.id] = user;
//       return acc;
//     }, {});
//   }
//   let usersById = groupById(users);
//   console.log(usersById);
//   /*
//   // после вызова у нас должно получиться:
//   usersById = {
//     john: {id: 'john', name: "John Smith", age: 20},
//     ann: {id: 'ann', name: "Ann Smith", age: 24},
//     pete: {id: 'pete', name: "Pete Peterson", age: 31},
//   }
//   */

// function unique(arr) {
//   let unique = new Set(arr);
//   //   return unique;
//   return Array.from(unique);
// }
// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];
// console.log(unique(values)); // Hare,Krishna,:-O

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// function aclean(arr) {
//   let unique = new Map();
//   arr.forEach((element) => {
//     unique.set(element.toLowerCase().split("").sort().join(""), element);
//   });
//   return Array.from(unique.values());
//   //   let result = [];
//   //   for (let word of unique.values()) {
//   //     result.push(word);
//   //   }
//   //   return result;
// }
// alert(aclean(arr));

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let salarie of Object.values(salaries)) {
//     sum += salarie;
//   }
//   return sum;
// }
// alert(sumSalaries(salaries)); // 650

// let user = {
//   name: "John",
//   age: 30,
// };
// function count(user) {
//   return Object.entries(user).length;
// }
// alert(count(user)); // 2

// let user = { name: "John", years: 30 };
// let { name, years: age, isAdmin = false } = user;
// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
// function topSalary(salaries) {
//   let maxSalaryName=null;
//   maxSalary = 0;
//   for (let person of Object.entries(salaries)) {
//     let [name, salary] = person;
//     if (salary < maxSalary) continue;
//     maxSalary = salary;
//     maxSalaryName = name;
//   }
//   return maxSalaryName;
// }
// console.log(topSalary(salaries));

// alert(new Date(2012, 1, 20, 3, 12));

// let date = new Date(2012, 0, 3);
// const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
// function getWeekDay(date) {
//   return days[date.getDay()];
// }
// alert(getWeekDay(date));

// let date = new Date(2012, 0, 3);
// function getLocalDay(date) {
//   const day = date.getDay();
//   if (day == 0) return 7;
//   return day;
// }
// alert(getLocalDay(date));

// let date = new Date(2015, 0, 2);
// function getDateAgo(date, days) {
//   return new Date(date.getTime() - days * 24 * 3600 * 1000);
// }
// alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
// alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)

// function getLastDayOfMonth(year, month) {
//   return new Date(year, month + 1, 0).getDate();
// }
// alert(getLastDayOfMonth(2012, 1));

// function getSecondsToday() {
//   const date = new Date();
//   const startDate = new Date(
//     date.getFullYear(),
//     date.getMonth(),
//     date.getDate()
//   );
//   return Math.trunc((date - startDate) / 1000);
// }
// alert(getSecondsToday());

// function getSecondsToTomorrow() {
//   const date = new Date();
//   return (
//     24 * 3600 -
//     date.getHours() * 3600 -
//     date.getMinutes() * 60 -
//     date.getSeconds()
//   );
// }
// alert(getSecondsToTomorrow());

// function formatDate(date) {
//   const oldDate = new Date(date);
//   const currentDate = new Date();
//   const diff = currentDate - oldDate;
//   if (diff < 1000) return "Right now";
//   if (diff < 60000) return `${Math.trunc(diff / 1000)} second before`;
//   if (diff < 3600000) return `${Math.round(diff / 60000)} minutes before`;
//   const dateArr = oldDate.toString().split(" ");
//   let month = oldDate.getMonth() + 1;
//   month = month > 9 ? month : `0${month}`;
//   resultDate = `${dateArr[2]}.${month}.${dateArr[3]}, ${dateArr[4].slice(
//     0,
//     5
//   )}  `;
//   return resultDate;
// }
// alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
// alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
// alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
// alert(formatDate(new Date(new Date() - 5 * 86400 * 1000))); // вчерашняя дата вроде 31.12.2016, 20:00

// let user = {
//   name: "Василий Иванович",
//   age: 35,
// };
// console.log(JSON.parse(JSON.stringify(user)));

// let room = {
//   number: 23,
// };
// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//   place: room,
// };
// room.occupiedBy = meetup;
// meetup.self = meetup;
// alert(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return key != "" && value == meetup ? undefined : value;
//   })
// );
