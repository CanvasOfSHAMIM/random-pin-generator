// notification hide
document.getElementById("correctPin").style.display = "none"
document.getElementById("wrongPin").style.display = "none"
document.getElementById("action-left").style.display = "none"

// random pin generator
document.getElementById("generate-pin").addEventListener("click", function(){
    const randomPin = Math.round(999 + Math.random() * 9000 );
    document.getElementById("generated-pin").value = randomPin;
})

// keypad button
function numberButton(num){
    document.getElementById("password-input").value = document.getElementById("password-input").value + num;
}
function singleClear(){
    let inputValue = document.getElementById("password-input").value;
    document.getElementById("password-input").value = inputValue.substring(0, inputValue.length -1);
}
function allClear(){
    document.getElementById("password-input").value = "";
}

// submit Button
function submitButton(){
    let inputPin = document.getElementById("password-input").value;
    let generatedPin = document.getElementById("generated-pin").value;
    if(inputPin == "" && generatedPin == ""){
        alert("You haven't generate pin yet.");
    }
    else if(inputPin == generatedPin){
        document.getElementById("correctPin").style.display = "block"
        document.getElementById("wrongPin").style.display = "none"
    }
    else{
        document.getElementById("correctPin").style.display = "none"
        document.getElementById("wrongPin").style.display = "block"
        tryLeft();
    }
}

// action left
let count = 0;

function tryLeft() {
    let inputPin = document.getElementById('password-input').value;
    let generatedPin = document.getElementById('generated-pin').value;
    count++
    if (count == 1 && inputPin !== generatedPin) {
        document.getElementById("action-left").style.display = "block"
    } 
    else if (count == 2 && inputPin !== generatedPin) {
        document.getElementById("action-left").innerText = "2 try left"
    } 
    else if (count == 3 && inputPin !== generatedPin) {
        document.getElementById("action-left").innerText = "1 try left"
    } 
    else if (count == 4 && inputPin !== generatedPin) {
        document.getElementById("action-left").innerText = "0 try left"
        document.getElementById("submit-button").style.background = "#425062"
        document.getElementById("submit-button").disabled = true;
    }
}