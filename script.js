
let color = "white";
let click = false;


document.addEventListener("DOMContentLoaded", function(){
createBoard(100);

colorPicker = document.querySelector('#color-picker');
colorPicker.addEventListener('change', function() {
  console.log(colorPicker.value);
})
colorPicker.value = '#7b68ee';



document.querySelector("body").addEventListener("click",function(e){
    if (e.target.tagName != "BUTTON"){
        click=!click;
        let draw = document.querySelector("#draw");
        if(click){
            draw.innerHtml = "Now you can draw"
        }
        else{
            draw.innerHtml = "You're not allowed to draw. "
        }
    }

})
let btn_popup = document.querySelector("#popup")
btn_popup.addEventListener("click", function(){

    let size = input;
    createBoard(size);
})

})

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
function getSize(){
    input = prompt("What will be the size of the board");
    let message = document.querySelector("#message");
    if (input ==""){
        message.innerHTML ="Please provide a number";
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "Provide a number between 1 and 100"
    }
    else{
        message.innerHTML = "Now you play!"
        return input;
    }
}




function colorDiv(){
    if (click){

        if(color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else if(color == 'color-picker'){this.style.backgroundColor = colorPicker.value}
     
        else{
        this.style.backgroundColor = 'black'
        }
    }    
}
function setColor(colorChoice){
     color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "whitesmoke")
}




