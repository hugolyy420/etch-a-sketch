const gridContainer = document.querySelector(".container");
let interval = null;
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.textContent = slider.value + " x " + slider.value ;

function makeGrids (rowNumber) {
    let total = rowNumber * rowNumber + 1;
    const containerWidth = document.querySelector(".container").clientHeight;

for (let i = 1; i < total; i++) {
    const smallGrid = document.createElement("div");
    smallGrid.style.width = containerWidth / rowNumber + "px";
    smallGrid.style.height = containerWidth / rowNumber + "px";
    smallGrid.classList.add("small-grid");
    gridContainer.appendChild(smallGrid);
}}

makeGrids(16);

function changeColor (e) {
        e.target.classList.add("change-color");
    }

let grids = document.querySelectorAll(".small-grid");     
grids.forEach((grid) => { 
    grid.addEventListener("mouseover", changeColor)}
);

slider.oninput = function() {
    output.textContent = this.value + " x " + this.value;
}

slider.addEventListener('mouseup', function () {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    makeGrids(slider.value);
    let grids = document.querySelectorAll(".small-grid");     
    grids.forEach((grid) => { 
        grid.addEventListener("mouseover", changeColor)}
);
})