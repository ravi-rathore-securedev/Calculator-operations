document.querySelector(".buttons").addEventListener("click", function (event) {
    handleButtonClick(event.target.value);
});

document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (/[0-9+\-*/.=]/.test(key)) {
        handleButtonClick(key);
    } else if (key === "Backspace") {
        handleButtonClick("Back");
    } else if (key === "Enter") {
        handleButtonClick("=");
    }
});

function handleButtonClick(operation) {
    const display = document.querySelector(".display");
    const currentValue = display.value;

    if (operation === "C") {
        display.value = "";
    } else if (operation === "=") {
        try {
            display.value = eval(currentValue);
        } catch (error) {
            display.value = "Error";
        }
    } else if (operation === "Back") {
        display.value = currentValue.slice(0, -1); 
    } else {
        display.value = currentValue + operation;
    }
}