let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("result").value = displayValue;
}

// function clear(){
//     // console.log(document.getElementById('result').value);
//     document.getElementById('result').value = " ";
// }

function clear() {
    document.getElementById("result").value = "Has an";
}

function Back(){
    var clear = documet.getElementById('result');
    clear.value = clear.value.slice(0,-1);
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("result").value = displayValue;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
