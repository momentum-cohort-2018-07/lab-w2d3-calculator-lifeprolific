var inputButtons = document.getElementsByClassName("button__input")
var clear = document.getElementById("clear")
var execute = document.getElementById("execute")
var display = document.getElementById("display")

var buttonDictionary = {
    b1:"1",
    b2:"2",
    b3:"3",
    b4:"4",
    b5:"5",
    b6:"6",
    b7:"7",
    b8:"8",
    b9:"9",
    b0:"0",
    decimal:".",
    divide:"/",
    multiply:"*",
    subtract:"-",
    add:"+",
}

function addText(event) {
    display.innerHTML = display.innerHTML + buttonDictionary[this.id]
}

function clearDisplay(event) {
    display.innerHTML = ""
}

function evaluate(event) {
    try {
        display.innerHTML = eval(display.innerHTML)
    }
    catch(error) {
        display.innerHTML = "<img src='./explosion.gif' id='explosionImg'>"
    }
}

function removeExplosion() {

}

for (inputButton of inputButtons) {
    inputButton.addEventListener("click", addText)
}

clear.addEventListener("click", clearDisplay)

execute.addEventListener("click", evaluate)