let result = "0";
let currentInput = "";
let currentOperator = "";

function appendToDisplay(value) {
    if (result === "0" && value !== "+" && value !== "-" && value !== "*" && value !== "/") {
        result = value;
    } else {
        result += value;
    }
    document.getElementById("result").value = result;
}

function clearDisplay() {
    result = "0";
    document.getElementById("result").value = result;
}

function calculate() {
    try {
        result = eval(result);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}