// grid setup
let gridSize = 16;
let gridWidth = (1 / gridSize * 100) + "%";
const canvas = document.getElementById("canvas");
const sizeInput = document.getElementById("inputSize");


function initializeGrid() {
    gridSize = sizeInput.value;
    gridWidth = (1 / gridSize * 100) + "%";

    try {
        if(gridSize > 100) {
            throw "greater than 100";
        }
        if(gridSize < 1) {
            throw "less than 1";
        }

        canvas.innerHTML = '';
        for(let i = 0; i < gridSize; i++) {
            for(let k = 0; k < gridSize; k++) {
                let gridSquare = document.createElement("div");
                gridSquare.classList.add("gridSquare");
                gridSquare.style.backgroundColor = "white";
                gridSquare.style.width = gridWidth;
                gridSquare.style.height = gridWidth;
                gridSquare.addEventListener("mouseover", function(e) {
                    gridSquare.style.backgroundColor = "black";
                });


                canvas.appendChild(gridSquare);
            }
        }
    }
    catch(errorMsg) {
        alert("Board size is " + errorMsg + ".");
    }

    
}

initializeGrid();

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", initializeGrid);
