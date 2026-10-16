function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    if (operator == "+") {
        return add(a,b);
    } else if (operator == "—") {
        return subtract(a,b)
    } else if (operator == "/") {
        return divide(a,b)
    } else if (operator == "✕") {
        return multiply(a,b)
    }
}

let entries = 0;
let operand1 = [];
let operand2 = [];
let operator;

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let operators = ['✕', '/', '—', '+'];
let solver = "=";

let calculatorButtons = document.querySelectorAll(".calc-button");
let calculatorDisplay = document.querySelector(".calc-display");
let answer;
let clearButton = document.querySelector(".clear-button");

calculatorButtons.forEach(calculatorButton => {
    calculatorButton.addEventListener("click", () => {
    if (entries == 0) {
        if (numbers.includes(calculatorButton.textContent)) {
            operand1.push(calculatorButton.textContent);
            calculatorDisplay.textContent += calculatorButton.textContent
        } else if (operators.includes(calculatorButton.textContent)) {
            entries += 1;
            operand1 = Number(operand1.join(""));
            operator = calculatorButton.textContent;
            calculatorDisplay.textContent += calculatorButton.textContent
            entries += 1;
        }
    } else if (entries == 2) {
        if (numbers.includes(calculatorButton.textContent)) {
            operand2 += calculatorButton.textContent;
            calculatorDisplay.textContent += calculatorButton.textContent
        } else if (calculatorButton.textContent == solver) {
            entries += 1;
            operand2 = Number(operand2);
            answer = operate(operand1, operator, operand2)
            calculatorDisplay.textContent = `${answer}`;
        }
    } else if (entries == 3) {
        operand1 = answer; 
        operand2 = [];
        if (operators.includes(calculatorButton.textContent)) {
            operator = calculatorButton.textContent;
            calculatorDisplay.textContent += calculatorButton.textContent
            entries += 1;
        } else {
            return
        }
    } else if (entries == 4) {
        if (numbers.includes(calculatorButton.textContent)) {
            operand2 += calculatorButton.textContent;
            calculatorDisplay.textContent += calculatorButton.textContent
        } else if (calculatorButton.textContent == solver) {
            entries += 1;
            operand2 = Number(operand2);
            answer = operate(operand1, operator, operand2)
            calculatorDisplay.textContent = `${answer}`;
        }
    } 
})
});

clearButton.addEventListener("click", () => {
    entries = 0;
    operand1 = [];
    operand2 = [];
    operator = '';
    calculatorDisplay.textContent = '';
})