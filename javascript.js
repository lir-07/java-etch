const container = document.getElementById("container");
const button = document.createElement("button");
const input = document.getElementById("sizeInput");

button.textContent = "Change The Grid!";

function makeGridSize(number){
    container.innerHTML = "";

    const squareSize = 640 / number;

    for(let i = 0; i < number*number; i++){
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
        });
        
        container.appendChild(square);
    }
}



button.addEventListener("click", () => {
    let answer = prompt("Number of squares per side for the new grid?");

    while (answer > 100 || answer < 0){
        answer = prompt("Too big of a number! Number of squares per side for the new grid?");
    }

    makeGridSize(answer);


})

makeGridSize(16);

document.body.append(button);