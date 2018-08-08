var inputButtons = document.getElementsByClassName("button__input")

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
    decimal:".",
    divide:"/",
    multiply:"*",
    subtract:"-",
    add:"+",
}

function addText(event) {
    display.innerHTML = display.innerHTML + buttonDictionary[this.id]
}

for (inputButton of inputButtons) {
    inputButton.addEventListener("click", addText)
}