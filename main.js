var inputButtons = document.getElementsByClassName("button__input")
var clear = document.getElementById("clear")
var execute = document.getElementById("execute")
var display = document.getElementById("display")

var buttonDictionary = {
    b1: "1",
    b2: "2",
    b3: "3",
    b4: "4",
    b5: "5",
    b6: "6",
    b7: "7",
    b8: "8",
    b9: "9",
    b0: "0",
    decimal: ".",
    divide: "/",
    multiply: "*",
    subtract: "-",
    add: "+",
}

var validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "/", "*", "-", "+"]

function checkValid () {
    try {
        eval(display.innerHTML)
        execute.classList.remove("alert")
    }
    catch (error) {
        execute.classList.add("alert")
    }
}

function clickText(event) {
    display.innerHTML = display.innerHTML + buttonDictionary[event.target.id]
    checkValid()
}

function typeText(event) {
    var keyPressed = event.key
    if (validKeys.includes(keyPressed)) {
        display.innerHTML = display.innerHTML + keyPressed
        checkValid()
    }
}

function clearDisplay(event) {
    display.innerHTML = ""
    execute.classList.remove("alert")
}

function evaluate(event) {
    try {
        if (display.innerHTML != "") {
            display.innerHTML = eval(display.innerHTML)
        }
    }
    catch (error) {
        display.innerHTML = "<img src='./explosion.gif' id='explosionImg'>"
        explosionTimeout = window.setTimeout(removeExplosion, 1000)
    }
}

function removeExplosion() {
    display.innerHTML = ""
    window.clearTimeout(explosionTimeout)
    execute.classList.remove("alert")
}

//add event listeners
for (inputButton of inputButtons) {
    inputButton.addEventListener("click", clickText)
}
clear.addEventListener("click", clearDisplay)
execute.addEventListener("click", evaluate)
document.addEventListener('keypress', typeText)