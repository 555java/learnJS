// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// const isEmpty = function (obj) {
//   let i = 0;
//   for (let key in obj) {
//     i++;
//   }
//   return i === 0;
// };
// console.log(isEmpty({ name: "john" }));
// console.log(isEmpty({}));

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// const calcSum = function (obj) {
//   let sum = 0;
//   for (let key in obj) {
//     sum = sum + obj[key];
//   }
//   return sum;
// };
// console.log(calcSum(salaries));

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// const multiplyNumeric = function (obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] = obj[key] * 2;
//     }
//   }
// };
// multiplyNumeric(menu);
// console.log(menu);

// let calculator = {
//   a: 0,
//   b: 0,
//   read() {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     alert(this.step);
//     return this;
//   },
// };
// ladder.up().up().down().showStep().down().down().showStep();

// function Calculator() {
//   this.a = 0;
//   this.b = 0;
//   this.read = function () {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }
// let calculator = new Calculator();
// calculator.read();
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += +prompt("a?", 0);
//   };
// }
// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// alert(accumulator.value); // выведет сумму этих значений
