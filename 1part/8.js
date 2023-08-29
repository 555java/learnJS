// let head = {
//   glasses: 1,
// };
// let table = {
//   pen: 3,
//   __proto__: head,
// };
// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };
// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };
// alert(bed.glasses);
// alert(pockets.pen);

// function Obj() {}
// Obj.prototype = {};
// let obj = new Obj();
// let obj2 = new obj.constructor();
// console.log(obj);
// console.log(obj2);

// function f() {
//   alert("Hello!");
// }
// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };
// f.defer(1000);

// function f(a, b) {
//   alert(a + b);
// }
// Function.prototype.defer = function (ms) {
//   return (...args) => {
//     setTimeout(() => this(...args), ms);
//   };
// };
// f.defer(1000)(1, 2);

// let dictionary = Object.create(null);
// dictionary.toString = function () {
//   const properties = [];
//   console.log(this);
//   for (let key in this) {
//     properties.push(key); // "apple", затем "__proto__"
//   }
//   return properties.join(", ");
// };
// Object.defineProperty(dictionary, "toString", {
//   enumerable: false,
// });
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
// alert(dictionary.toString);
// // только apple и __proto__ выведены в цикле
// for (let key in dictionary) {
//   alert(key); // "apple", затем "__proto__"
// }
// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"
