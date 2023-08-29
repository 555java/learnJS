let table = document.getElementById("bagua-table");
let ifEdit = false;
let currentContent = "";

let okButton = document.createElement("button");
okButton.innerText = "OK";
let cancelButton = document.createElement("button");
cancelButton.innerText = "Cancel";
let buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
buttonContainer.append(okButton);
buttonContainer.append(cancelButton);

function checkChanges(event) {
  let cell = event.target.closest("td");
  let area = cell.querySelector("textarea");
  if (area.value.includes("height")) return;
  if (event.target.innerText === "OK") {
    cell.innerHTML = area.value;
  } else if (event.target.innerText === "Cancel") {
    cell.innerHTML = currentContent;
  }
  ifEdit = false;
  cell.classList.remove("edited");
  currentContent = "";
}

function tableOnClick(event) {
  let cell = event.target.closest("td");
  if (ifEdit) return;
  if (!cell) return;
  cell.classList.add("edited");

  let areaHeight = cell.getBoundingClientRect().height;
  let areaWidth = cell.getBoundingClientRect().width;
  let area = document.createElement("textarea");

  area.style.height = areaHeight + "px";
  area.style.width = areaWidth + "px";
  area.innerText = currentContent = cell.innerHTML;

  area.classList.add("cell-area");
  cell.innerHTML = "";
  cell.append(area);
  cell.append(buttonContainer);
  ifEdit = true;
}

table.addEventListener("click", tableOnClick);
okButton.addEventListener("click", checkChanges);
cancelButton.addEventListener("click", checkChanges);
