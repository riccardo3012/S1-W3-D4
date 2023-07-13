const childArr = [];

function creaTab() {
  let tab = document.getElementById("tab");
  for (let i = 1; i <= 76; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = i;
    tab.appendChild(cell);
    childArr.push(cell);
  }
}

function draw() {
  let numero = Math.floor(Math.random() * childArr.length);
  const randomN = childArr[numero];

  randomN.style.backgroundColor = "orange";
}

creaTab();
