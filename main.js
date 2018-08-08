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

function clickText(event) {
    display.innerHTML = display.innerHTML + buttonDictionary[this.id]
    try {
        eval(display.innerHTML)
        execute.style.backgroundColor = "lightseagreen"
    }
    catch (error) {
        console.log("error detected")
        execute.style.backgroundColor = "red"
    }
}

function clearDisplay(event) {
    display.innerHTML = ""
}

function evaluate(event) {
    try {
        if (display.innerHTML != "") {
            display.innerHTML = eval(display.innerHTML)
        }
    }
    catch(error) {
        display.innerHTML = "<img src='./explosion.gif' id='explosionImg'>"
        explosionTimeout = window.setTimeout(removeExplosion,1000)
    }
}

function removeExplosion() {
    display.innerHTML = ""
    window.clearTimeout(explosionTimeout)
}

for (inputButton of inputButtons) {
    inputButton.addEventListener("click", clickText)
}

clear.addEventListener("click", clearDisplay)

execute.addEventListener("click", evaluate)

document.addEventListener('keypress', (event) => {
    const keyName = event.key
    display.innerHTML = display.innerHTML + keyName
  })