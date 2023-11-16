/*const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

let firstOperand = '';
let secondOperand = '';
let operator = '';

function handleNumberClick(number) {
    if (operator === '') {
        firstOperand += number;
        display.textContent = firstOperand;
    } else {
        secondOperand += number;
        display.textContent = secondOperand;
    }
}

function handleOperatorClick(op) {
    if (firstOperand === '') return;
    operator = op;
}

function handleEqualsClick() {
    if (secondOperand === '') return;
    const result = calculateResult();
    display.textContent = result;
    firstOperand = result;
    secondOperand = '';
    operator = '';
}

function handleClearClick() {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    display.textContent = '0';
}

function calculateResult() {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        if (/\d/.test(buttonValue)) {
            handleNumberClick(buttonValue);
        } else if (buttonValue === 'C') {
            handleClearClick();
        } else if (buttonValue === '=') {
            handleEqualsClick();
        } else {
            handleOperatorClick(buttonValue);
        }
    });
});
*/