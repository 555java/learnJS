"use strict";

// function delay(ms) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(), ms);
//   });
// }
// delay(3000).then(() => alert("выполнилось через 3 секунды"));

// function go() {
//   showCircle(150, 150, 100).then((div) => {
//     div.classList.add("message-ball");
//     div.append("Hello, world!");
//   });
// }
// function showCircle(cx, cy, radius) {
//   return new Promise(function (resolve, reject) {
//     let div = document.createElement("div");
//     div.style.width = 0;
//     div.style.height = 0;
//     div.style.left = cx + "px";
//     div.style.top = cy + "px";
//     div.className = "circle";
//     document.body.append(div);
//     setTimeout(() => {
//       div.style.width = radius * 2 + "px";
//       div.style.height = radius * 2 + "px";
//       div.addEventListener("transitionend", function handler() {
//         div.removeEventListener("transitionend", handler);
//         resolve(div);
//       });
//     }, 0);
//   });
// }

// async function loadJson(url) {
//   let response = await fetch(url);
//   try {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       await Promise.reject(new Error(response.status));
//     }
//   } catch (error) {
//     throw error;
//   }
// }
// loadJson("no-such-user.json") // (3)
//   .catch(alert); // Error: 404

//
//
//

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = "HttpError";
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let response = await fetch(url);
//   console.log(response);
//   if (response.status == 200) {
//     return response.json();
//   } else {
//     console.log("error");
//     throw new HttpError(response);
//   }
// }

// // Запрашивать логин, пока github не вернёт существующего пользователя.
// async function demoGithubUser() {
//   let userName = null;
//   do {
//     try {
//       let name = prompt("Введите логин?", "iliakan");
//       let user = await loadJson(`https://api.github.com/users/${name}`);
//       userName = user.name;
//       alert(`Полное имя: ${userName}.`);
//       return user;
//     } catch (error) {
//       console.log(error);
//       if (error instanceof HttpError && error.response.status == 404) {
//         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//       } else {
//         throw error;
//       }
//     }
//   } while (!userName);
// }

// demoGithubUser();

//
//
//

// async function wait() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   wait().then((result) => alert(result));
//   // ...что здесь написать?
//   // чтобы вызвать wait() и дождаться результата "10" от async–функции
//   // не забывайте, здесь нельзя использовать "await"
// }

// f();
