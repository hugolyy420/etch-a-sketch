const gridContainer = document.querySelector(".container");
const rainbowBtn = document.querySelector("#rainbow");
const colorPicker = document.querySelector("#colorpicker");
let interval = null;
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let allchar = "0123456789ABCDEF";
output.textContent = slider.value + " x " + slider.value ;
slider.oninput = function() {
    output.textContent = this.value + " x " + this.value;
}

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

function changeBlack (e) {
        e.target.style.backgroundColor = "black";
    }

function changeRandomColor (e) {
    let randcol = "";
        for (let i = 0; i < 6; i++){
            randcol += allchar[Math.floor(Math.random() * 16)]
        }
        e.target.style.backgroundColor = "#" + randcol;
}

function addColorChange () {
    let grids = document.querySelectorAll(".small-grid");     
    grids.forEach((grid) => { 
        grid.addEventListener("mouseover", changeBlack)}
    );
}

makeGrids (16);
addColorChange ();

slider.addEventListener('mouseup', function () {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    makeGrids(slider.value);
    addColorChange();
})

colorPicker.addEventListener('input', function (e){
    let grids = document.querySelectorAll(".small-grid");
    let selectedColor = e.target.value;   
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = selectedColor;
        })}
    );
})

rainbowBtn.addEventListener("click", function () {
    let grids = document.querySelectorAll(".small-grid");     
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", function (e) {
            changeRandomColor(e);
        })}
    );
})




