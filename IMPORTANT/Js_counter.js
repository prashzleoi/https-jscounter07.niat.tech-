let countervalue = document.getElementById("counterValue");

function onIncrement() {
    let previousCountervalue = countervalue.textContent;
    let updatedValue = parseInt(previousCountervalue) + 1;
    countervalue.textContent = updatedValue;
    if (updatedValue > 0) {
        countervalue.style.color = "Green";
    } else if (updatedValue < 0) {
        countervalue.style.color = "red";
    } else {
        countervalue.style.color = "black";
    }
}

function onDecrement() {
    let previousCountervalue = countervalue.textContent;
    let updatedValue = parseInt(previousCountervalue) - 1;
    countervalue.textContent = updatedValue;
    if (updatedValue > 0) {
        countervalue.style.color = "Green";
    } else if (updatedValue < 0) {
        countervalue.style.color = "red";
    } else {
        countervalue.style.color = "black";
    }
}

function onReset() {
    let previousCountervalue = countervalue.textContent;
    let updatedValue = 0;
    countervalue.textContent = updatedValue;
    if (updatedValue > 0) {
        countervalue.style.color = "Green";
    } else if (updatedValue < 0) {
        countervalue.style.color = "red";
    } else {
        countervalue.style.color = "black";
    }
}