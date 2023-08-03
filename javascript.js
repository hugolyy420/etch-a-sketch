const gridContainer = document.querySelector(".container");
let interval = null;

function makeGrids (rowNumber) {
    let total = rowNumber * rowNumber + 1;

for (let i = 1; i < total; i++) {
    let h = rowNumber ;
    const smallGrid = document.createElement("div");
    const containerWidth = document.querySelector(".container").clientHeight;
    smallGrid.style.width = containerWidth / rowNumber + "px";
    smallGrid.style.height = containerWidth / rowNumber + "px";
    smallGrid.classList.add("small-grid");
    gridContainer.appendChild(smallGrid);
}}

makeGrids (40);


function changeColor (e) {
        e.target.classList.add("change-color");
    }

let grids = document.querySelectorAll(".small-grid");   
grids.forEach((grid) => { 
    grid.addEventListener("mouseover", changeColor)}
);

