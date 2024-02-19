let displayValue = '0';
let operator = '';
let firstOperand = null;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function setOperator(newOperator) {
    if (operator !== '' && firstOperand !== null) {
        calculateResult();
    }
    operator = newOperator;
    firstOperand = parseFloat(displayValue);
    displayValue = '0';
    updateDisplay();
}

function calculateResult() {
    const secondOperand = parseFloat(displayValue);
    if (isNaN(firstOperand) || isNaN(secondOperand)) {
        clearDisplay();
        return;
    }

    switch (operator) {
        case '+':
            displayValue = (firstOperand + secondOperand).toString();
            break;
        case '-':
            displayValue = (firstOperand - secondOperand).toString();
            break;
        case '*':
            displayValue = (firstOperand * secondOperand).toString();
            break;
        case '/':
            if (secondOperand === 0) {
                clearDisplay();
                alert("Cannot divide by zero");
                return;
            }
            displayValue = (firstOperand / secondOperand).toString();
            break;
    }

    operator = '';
    firstOperand = null;
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
    updateDisplay();
});
