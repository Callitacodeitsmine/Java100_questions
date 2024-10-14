
const resultDisplay = document.getElementById("result");

let currentResult = "";
let currentOperation = "";

function updateResultDisplay() {
  resultDisplay.textContent = currentResult;
}

function handleNumber(number) {
  currentResult += number;
  updateResultDisplay();
}

function handleOperation(operation) {
  currentOperation = operation;
  currentResult += ` ${operation} `;
  updateResultDisplay();
}

function calculateResult() {
  const parts = currentResult.split(" ");

  if (parts.length === 3) {
    const num1 = parseFloat(parts[0]);
    const num2 = parseFloat(parts[2]);
    const operation = parts[1];

    switch (operation) {
      case "+":
        currentResult = num1 + num2;
        break;
      case "-":
        currentResult = num1 - num2;
        break;
      case "*":
        currentResult = num1 * num2;
        break;
      case "/":
        currentResult = num1 / num2;
        break;
      default:
        currentResult = "Error";
    }
  } else {
    currentResult = "Error";
  }

  updateResultDisplay();
}

function clearResult() {
  currentResult = "";
  currentOperation = "";
  updateResultDisplay();
}