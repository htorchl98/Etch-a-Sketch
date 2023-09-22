const container = document.querySelector('.content');
const playbutton1 = document.querySelector('.tiles16'); // Changed selector
const playbutton2 = document.querySelector('.tiles32'); // Changed selector
const playbutton3 = document.querySelector('.tiles64'); // Changed selector
const playbutton4 = document.querySelector('.custom');
const sketchArea = document.querySelector('.sketchArea'); // Changed selector

// preparar la funcion de crear un grid 16x16 o de otro tamaño
function setGrid(num) {
    sketchArea.innerHTML = '';
    sketchArea.style.cssText = "border: 1px solid lightgray";
    sketchArea.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  for (let i = 1; i <= num * num; i++) {
    const grid = document.createElement('div');
    grid.addEventListener("mouseover", colorMyDiv);
    grid.style.cssText = "background-color : white; border : 0px solid gray";
    grid.classList.add("colorMyDiv")
    sketchArea.appendChild(grid);
  }
}

playbutton1.addEventListener("click", function() {
  setGrid(16);
});
playbutton2.addEventListener("click", function() {
    setGrid(32);
});
playbutton3.addEventListener("click", function() {
    setGrid(64);
});
playbutton4.addEventListener("click", function() {
  setGrid(prompt("Tell me how big you want it.. as long as it's lower than 100!"));
});

setGrid(16);

function colorMyDiv () {
  this.style.cssText = "background-color: black"
}
// let gridSize = prompt()
// console.log(grid);
