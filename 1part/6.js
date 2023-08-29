"use strict";
// function sumToCycle(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// function sumToMath(n) {
//   return ((1 + n) * n) / 2;
// }
// function sumToRecursion(n) {
//   let sum = 0;
//   if (n === 1) return 1;
//   sum = sumToRecursion(n - 1) + n;
//   return sum;
// }
// function check(func) {
//   const start = new Date();
//   for (let i = 100; i < 5000; i++) {
//     func(i);
//   }
//   const end = new Date();
//   console.log("This was calculate in", end - start, " ms");
// }
// console.log("SumToCycle");
// check(sumToCycle);
// console.log("SumToMath");
// check(sumToMath);
// console.log("SumToRecursion");
// check(sumToRecursion);
// // alert(sumToCycle(99));
// // alert(sumToMath(99));
// // alert(sumToRecursion(100));

// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }
// alert(factorial(5));

// function fib(n) {
//   if (n === 1 || n === 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(13)); // 5527939700884757

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };
// function printList(list) {
//   let printedList = list;
//   while (printedList) {
//     console.log(printedList.value);
//     printedList = printedList.next;
//   }
// }
// function printList2(list) {
//   if (!list.next) return console.log(list.value);
//   console.log(list.value);
//   printList2(list.next);
// }
// function printReverse(list) {
//   if (!list.next) return console.log(list.value);
//   printReverse(list.next);
//   console.log(list.value);
// }
// printList(list);
// printList2(list);
// printReverse(list);

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// alert(sum(1)(2));

// let arr = [1, 2, 3, 4, 5, 6, 7];
// function inBetween(start, end) {
//   return function (item) {
//     return item > start && item < end;
//   };
// }
// function inArray(arr) {
//   return function (item) {
//     return arr.includes(item);
//   };
// }
// alert(arr.filter(inBetween(3, 6)));
// alert(arr.filter(inArray([1, 2, 10])));

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];
// function byField(filter) {
//   if (filter === "name") return (a, b) => (a.name > b.name ? 1 : -1);
//   if (filter === "age") return (a, b) => (a.age > b.age ? 1 : -1);
// }
// console.log(users.sort(byField("name")));
// // console.log(users.sort(byField("age")));

// function makeArmy() {
//   let shooters = [];
//   let i = 0;
//   while (i < 10) {
//     const num = i;
//     let shooter = function () {
//       alert(num);
//     };
//     shooters.push(shooter);
//     i++;
//   }
//   return shooters;
// }
// let army = makeArmy();
// army[0]();
// army[5]();

// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   }
//   counter.count = 0;
//   counter.set = function (num) {
//     counter.count = num;
//   };
//   counter.decrease = function () {
//     counter.count--;
//   };
//   return counter;
// }
// let counter = makeCounter();
// alert(counter()); // 0
// alert(counter()); // 1
// counter.set(10); // установить новое значение счётчика
// alert(counter()); // 10
// counter.decrease(); // уменьшить значение счётчика на 1
// alert(counter()); // 10 (вместо 11)

// function sum(a) {
//   let currentSum = a;
//   function f(b) {
//     currentSum += b;
//     return f;
//   }
//   f.toString = function () {
//     return currentSum;
//   };
//   return f;
// }
// alert(sum(1)(2)); // 3
// alert(sum(5)(-1)(2)); // 6
// alert(sum(6)(-1)(-2)(-3)); // 0
// alert(sum(0)(1)(2)(3)(4)(5)); // 15

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeo

// function printNumbers(from, to) {
//   let i = from;
//   const timerId = setInterval(() => {
//     console.log("call fn");
//     if (i <= to) {
//       alert(i++);
//       if (i == to) clearInterval(timerId);
//     }
//   }, 1000);
// }
// printNumbers(2, 10);

// function printNumbers(from, to) {
//   function print(delay) {
//     let timerId = setTimeout(() => {
//       alert(from++);
//       if (from <= to) print(700);
//     }, delay);
//   }
//   print(0);
// }
// printNumbers(3, 15);

// function work(a, b) {
//   alert(a + b); // произвольная функция или метод
// }
// function spy(func) {
//   function action(...args) {
//     func(...args);
//     action.calls.push([...args]);
//   }
//   action.calls = [];
//   return action;
// }
// work = spy(work);
// work(1, 2); // 3
// work(4, 5); // 9
// console.log(work);
// for (let args of work.calls) {
//   alert("call:" + args.join()); // "call:1,2", "call:4,5"
// }

// function f(x) {
//   console.log(x);
// }
// // создаём обёртки
// function delay(func, delay) {
//   function show() {
//     const timerId = setTimeout(() => {
//       func.apply(this, arguments);
//     }, delay);
//   }
//   return show;
// }
// let f1000 = delay(f, 3000);
// let f1500 = delay(f, 4500);
// f1000("test"); // показывает "test" после 1000 мс
// f1500("test");

// function debounce(func, timeout) {
//   const cache = new Map();
//   return function (x) {
//     if (cache.size) return;
//     func(x);
//     cache.set(x);
//     setTimeout(() => cache.clear(), timeout);
//   };
// }
// let f = debounce(alert, 1000);
// f(1); // выполняется немедленно
// f(2); // проигнорирован
// setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout(() => f(4), 1100); // выполняется
// setTimeout(() => f(5), 1500);

// function f(a) {
//   console.log(a);
// }
// function throttle(func, timeout) {
//   const cache = new Map();
//   return function (x) {
//     if (!cache.size) {
//       func(x);
//       cache.set(x, true);
//       setTimeout(() => {
//         for (let entry of cache) {
//           if (entry[1]) return;
//           func(entry[0]);
//         }
//         cache.clear();
//       }, timeout);
//       return;
//     }
//     cache.clear();
//     cache.set(x, false);
//   };
// }
// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);
// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)
// setTimeout(() => f1000(1), 3000);
// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3);
// // когда 1000 мс истекли ...
// // ...выводим 3, промежуточное значение 2 было проигнорировано

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: "Вася",
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: "John",

//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };
// askPassword(user.login.bind(user, true), user.login.bind(user, false));
