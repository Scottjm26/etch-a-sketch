
let color = "white";
let click = false;


document.addEventListener("DOMContentLoaded", function(){
createBoard(16);


// gets color from color picker and sets it to variable
colorPicker = document.querySelector('#color-picker');
colorPicker.addEventListener('change', function() {
  console.log(colorPicker.value);
})



// get size from slider and updates board with that size.
function setCurrentSize(newSize) {
  currentSize = newSize
}
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  reloadGrid()
}
function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}
function reloadGrid() {
  createBoard(currentSize)
}



// allows for on and off clicking.
document.querySelector("body").addEventListener("click",function(e){
    if (e.target.tagName != "BUTTON"){
        click=!click;
    }

})
// let btn_popup = document.querySelector("#popup")
// btn_popup.addEventListener("click", function(){

    
    
})


// }}

// generates divs for the board
function createBoard(size){
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i=0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }
}


//function that changes color of pointer after button is pushed. 
function colorDiv(){
    if (click){
        if(color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else if(color == 'color-picker'){this.style.backgroundColor = colorPicker.value
        }
        else{
        this.style.backgroundColor = 'black'
        }
    }    
}
function setColor(colorChoice){
     color = colorChoice;
}
// resets the etch a sketch board. 
function resetBoard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "whitesmoke")
}




// old function for getting size from a prompt. using slider now. 

// function getSize(){
//     input = prompt("What will be the size of the board");
//     let message = document.querySelector("#message");
//     if (input ==""){
//         message.innerHTML ="Please provide a number";
//     }
//     else if(input < 0 || input > 100){
//         message.innerHTML = "Provide a number between 1 and 100"
//     }
//     else{
//         message.innerHTML = "Now you play!"
//         return input;
//     }
// }
