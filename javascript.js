const gridContainer = document.querySelector(".container");

function makeGrids (rowNumber) {
    let total = rowNumber * rowNumber + 1;

for (let i = 1; i < total; i++) {
    const smallGrid = document.createElement("div");
    const containerWidth = document.querySelector(".container").clientHeight;
    // smallGrid.style.width = "containerWidth / rowNumber";
    // smallGrid.style.height = "containerWidth / rowNumber";
    // smallGrid.style.border = "0.5px solid black";
    smallGrid.classList.add("small-grid");
    gridContainer.appendChild(smallGrid);
}}

makeGrids (20);

function changeColor (e) {
        e.currentTarget.classList.add("change-color");
    }

let grids = document.querySelectorAll(".small-grid");   
grids.forEach((grid) => { 
    grid.addEventListener("mouseover", changeColor)}
);
