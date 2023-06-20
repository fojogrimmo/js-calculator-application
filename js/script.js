"use strict";

const display = document.querySelector(".output");
let buttons = Array.from(document.querySelectorAll("[data-button]"));
let parenthesesCounter = 0;

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        parenthesesCounter = 0;
        break;
      case "DEL":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        display.innerText = eval(display.innerText);
        break;
      case "×":
        display.innerText += "*";
        break;
      case "÷":
        display.innerText += "/";
        break;
      case "()":
        const openingParenthesis = "(";
        const closingParenthesis = ")";

        if (parenthesesCounter % 2 === 0) {
          display.innerText += openingParenthesis;
          parenthesesCounter++;
          console.log(parenthesesCounter);
        } else {
          display.innerText += closingParenthesis;
          parenthesesCounter--;
          console.log(parenthesesCounter);
        }
        break;
      case "%":
        break;

      case ".":
        const currentNumber = display.innerText.split(/[+\-*/]/).pop();
        if (!currentNumber.includes(".")) {
          display.innerText += ".";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
const selectButtons = document.querySelectorAll(".btn-select");
const keyboardItems = document.querySelectorAll(".keyboard-item");

selectButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let currentButton = button;
    let itemId = currentButton.getAttribute("data-btn");
    let currentItem = document.querySelector(itemId);

    selectButtons.forEach(function (button) {
      button.classList.remove("active");
    });
    keyboardItems.forEach(function (button) {
      button.classList.remove("active");
    });
    currentButton.classList.add("active");
    currentItem.classList.add("active");
  });
});
// ---
// class Calculator {
//   constructor(previousOperandTextElement, currentOperandTextElement) {
//     this.previousOperandTextElement = previousOperandTextElement;
//     this.currentOperandTextElement = currentOperandTextElement;
//     this.clear();
//   }

//   clear() {
//     this.currentOperand = "";
//     this.previousOperand = "";
//     this.operation = undefined;
//   }

//   delete() {
//     if (this.currentOperand === "") {
//       this.previousOperand = this.previousOperand.toString().slice(0, -1);
//     } else {
//       this.currentOperand = this.currentOperand.toString().slice(0, -1);
//     }
//   }

//   appendNumber(number) {
//     if (number === "." && this.currentOperand.includes(".")) return;
//     this.currentOperand = this.currentOperand.toString() + number.toString();
//   }

//   chooseOperation(operation) {
//     if (this.currentOperand === "") return;
//     if (this.previousOperand !== "") {
//       this.compute();
//     }
//     this.operation = operation;
//     this.previousOperand = this.currentOperand;
//     this.currentOperand = "";
//   }

//   compute() {
//     let computation;
//     const current = parseFloat(this.currentOperand);
//     const prev = parseFloat(this.previousOperand);

//     if (isNaN(prev) || isNaN(current)) return;
//     switch (this.operation) {
//       case "+":
//         computation = prev + current;
//         break;
//       case "-":
//         computation = prev - current;
//         break;
//       case "*":
//         computation = prev * current;
//         break;
//       case "÷":
//         computation = prev / current;
//         break;
//       default:
//         return;
//     }
//     this.currentOperandTextElement.innerText = computation;
//     this.operation = undefined;
//     this.previousOperand = "";
//     this.currentOperand = computation;

//     console.log(this.currentOperandTextElement);
//     console.log(this.previousOperandTextElement);
//     console.log(this.currentOperand);
//   }

//   getDisplayNumber(number) {
//     const stringNumber = number.toString();
//     const integerDigits = parseFloat(stringNumber.split(".")[0]);
//     const decimalDigits = stringNumber.split(".")[1];
//     let integerDisplay;
//     if (isNaN(integerDigits)) {
//       integerDisplay = "";
//     } else {
//       integerDisplay = integerDigits.toLocaleString("en", {
//         maximumFractionDigits: 0,
//       });
//     }
//     if (decimalDigits != null) {
//       return `${integerDisplay}.${decimalDigits}`;
//     } else {
//       return integerDisplay;
//     }
//   }

//   updateDisplay() {
//     this.currentOperandTextElement.innerText = this.getDisplayNumber(
//       this.currentOperand
//     );
//     if (this.operation != null) {
//       this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
//         this.previousOperand
//       )} ${this.operation}`;
//     } else {
//       this.previousOperandTextElement.innerText = "";
//     }
//   }
// }

// const numberButtons = document.querySelectorAll(".number");
// const operationButtons = document.querySelectorAll(".operator");
// const equalsButton = document.querySelector("[data-equals]");
// const deleteButton = document.querySelector("[data-delete]");
// const allClearButton = document.querySelector("[data-all-clear]");
// const previousOperandTextElement = document.querySelector(
//   "[data-previous-operand]"
// );
// const currentOperandTextElement = document.querySelector(
//   "[data-current-operand]"
// );

// const calculator = new Calculator(
//   previousOperandTextElement,
//   currentOperandTextElement
// );

// numberButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     calculator.appendNumber(button.innerText);
//     calculator.updateDisplay();
//   });
// });

// operationButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     calculator.chooseOperation(button.innerText);
//     calculator.updateDisplay();
//   });
// });

// equalsButton.addEventListener("click", (button) => {
//   calculator.compute();
//   calculator.updateDisplay();
// });

// allClearButton.addEventListener("click", (button) => {
//   calculator.clear();
//   calculator.updateDisplay();
// });

// deleteButton.addEventListener("click", (button) => {
//   calculator.delete();
//   calculator.updateDisplay();
// });
