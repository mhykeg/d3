document.getElementById("greeting-text-input").onchange = function() {changeGreetingText()}
function changeGreetingText() {
    let greetingTextInput = document.getElementById("greeting-text-input");
    let newGreetingText = document.getElementById("greeting");
    newGreetingText.innerHTML = greetingTextInput.value;
}

document.getElementById("signoff-input").onchange = function() {changeSignoff()}
function changeSignoff() {
    let signoffTextInput = document.getElementById("signoff-input");
    let signoffText = document.getElementById("signoff");
    signoff.innerHTML = signoffTextInput.value;
}

document.getElementById("font").onchange = function() {changeFont()}
function changeFont() {
    let fontChoice = document.getElementById("font");
    let newFontGreeting = document.getElementById("greeting");
    let newFontSignoff = document.getElementById("signoff")
    newFontGreeting.style.fontFamily = fontChoice.value;
    newFontSignoff.style.fontFamily = fontChoice.value;
}

document.getElementById("font-color").onchange = function() {changeFontColor()}
function changeFontColor() {
    let colorChoice = document.getElementById("font-color");
    let newFontColorGreeting = document.getElementById("greeting");
    let newFontColorSignoff = document.getElementById("signoff")
    newFontColorGreeting.style.color = colorChoice.value;
    newFontColorSignoff.style.color = colorChoice.value;
}

document.getElementById("color").onchange = function() {chooseColor()}
function chooseColor() {
    let colorChoice = document.getElementById("color").value;
    let newColor = document.getElementById("design");
    newColor.style.backgroundColor = colorChoice;
    document.getElementById("colornow").innerHTML = `The current color is ${newColor.style.backgroundColor}`
}

document.getElementsByTagName("rgb").onchange = function() {rgbColor()}
function rgbColor() {
    let redChoice = document.getElementById("red-input").value;
    let greenChoice = document.getElementById("green-input").value;
    let blueChoice = document.getElementById("blue-input").value;
    let rgbChoice = `rgb(${redChoice},${greenChoice}, ${blueChoice})`
    let newRGBColor = document.getElementById("design");
    newRGBColor.style.backgroundColor = rgbChoice;
    document.getElementById("colornow").innerHTML = `The current color is ${newRGBColor.style.backgroundColor}`
}


document.getElementById("color-button").onclick = function() {randomColor()}
function randomColor() {
    let randomRed = Math.floor(Math.random()*255)
    let randomGreen = Math.floor(Math.random()*255)
    let randomBlue = Math.floor(Math.random()*255)
    let randomColor = `rgb(${randomRed},${randomGreen},${randomBlue})`
    let newColor = document.getElementById("design");
    newColor.style.backgroundColor = randomColor;
    document.getElementById("colornow").innerHTML = `The current color is ${newColor.style.backgroundColor}`
}

document.getElementById("file-input").onchange = function() {displayImage()}
function displayImage() {
    let inputFile = document.getElementById("file-input");
    let imageLink = URL.createObjectURL(inputFile.files[0]);
    let clientImage = document.getElementById("client-image");
    clientImage.style.backgroundImage = `url(${imageLink})`;
    clientImage.innerHTML = "";
    clientImage.style.border = "none";
}