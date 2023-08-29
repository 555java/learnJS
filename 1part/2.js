// alert("im new js");

// let admin;
// let name;
// name = "John";
// admin = name;
// console.log(admin);

// const ourPlanetName = "Earth";
// let currentUser = "John";

// const name = prompt("What is yor name", "noname");
// alert(`your name is ${name}`);

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
// alert(a + b);

// let answer = prompt("which is official name of JS?");
// if (answer === "ECMAScript") {
//   alert("Right!");
// } else {
//   alert("it is ECMAScript!");
// }

// let number = +prompt("type the number", "0");
// if (number > 0) {
//   alert("1");
// } else if (number == 0) {
//   alert("0");
// } else {
//   alert("-1");
// }

// let result = a + b < 4 ? "Less" : "Much";

// let message =
//   login == "Staff"
//     ? "hello"
//     : login == "headmaster"
//     ? "good morning"
//     : login == ""
//     ? "no login"
//     : "";

// let user = prompt("who are you?", "admin");

// if (user === "admin") {
//   let password = prompt("password");
//   if (password === "111") {
//     alert("hello");
//   } else if (password === null || password === "") {
//     alert("Denied");
//   } else {
//     alert("wrong password");
//   }
// } else if (user === null || user === "") {
//   alert("Denied");
// } else {
//   alert("I dont know you");
// }
//

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 != 0) continue;
//   alert(i);
// }

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// let value;
// do {
//   value = prompt("put the num", "");
//   console.log(value);
// } while (value <= 100 && value !== null);

// let n = 100;
// console.log(2);
// for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (!(i % j)) break;
//     if (j < i - 1) continue;
//     console.log(i);
//     break;
//   }
// }

// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser == "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// const number = +prompt("Введите число между 0 и 3", "");
// switch (number) {
//   case 0:
//     alert("Вы ввели число 0");
//     break;
//   case 1:
//     alert("Вы ввели число 1");
//     break;
//   case 2:
//   case 3:
//     alert("Вы ввели число 2, а может и 3");
//     break;
//   default:
//     break;
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрешили?");
// }
// function checkAge(age) {
//   return age > 18 || confirm("Родители разрешили?");
// }

// function min(a, b) {
//   return a > b ? b : a;
// }

// const x = +prompt("insert x", 10);
// const n = +prompt("insert pow", 2);
// function pow(a, b) {
//   if (a < 1) return "not an integer";
//   return a ** b;
// }
// alert(pow(x, n));

// let ask = (question, yes, no) => (confirm(question) ? yes() : no());
// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );
