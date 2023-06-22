"use strict";

// For selecting between operations/functions

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
// -----
const display = document.querySelector(".output");
let buttons = Array.from(document.querySelectorAll("[data-button]"));
let parenthesesCounter = 0;

function findFactorial(num) {
  if (num === 0 || num === 1) return 1;
  else {
    return (num = num * findFactorial(num - 1));
  }
}

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
        let expression = display.innerText;
        expression = expression.replace(/\^/g, "**");
        expression = expression.replace(/%/g, "/100");
        expression = expression.replace(/(\d+)!/g, "findFactorial($1)");

        display.innerText = eval(expression);
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
        } else {
          display.innerText += closingParenthesis;
          parenthesesCounter--;
        }
        break;
      case ".":
        const currentNumber = display.innerText.split(/[+\-*/]/).pop();
        if (!currentNumber.includes(".")) {
          display.innerText += ".";
        }
        break;
      case "Exp(x)":
        display.innerText += "Math.exp(";
        parenthesesCounter++;
        break;
      case "Ln(x)":
        display.innerText += "Math.log(";
        parenthesesCounter++;
        break;
      case "Log(x)":
        display.innerText += "Math.log10(";
        parenthesesCounter++;
        break;
      case "|x|":
        display.innerText += "Math.abs(";
        parenthesesCounter++;
        break;

      case "Sin(x)":
        display.innerText += "Math.sin(";
        parenthesesCounter++;
        break;
      case "Cos(x)":
        display.innerText += "Math.cos(";
        parenthesesCounter++;
        break;
      case "Tan(x)":
        display.innerText += "Math.tan(";
        parenthesesCounter++;
        break;
      case "Cot(x)":
        display.innerText += "1 / Math.tan(";
        parenthesesCounter++;
        break;

      case "Asin(x)":
        display.innerText += "Math.asin(";
        parenthesesCounter++;
        break;
      case "Acos(x)":
        display.innerText += "Math.acos(";
        parenthesesCounter++;
        break;
      case "Atan(x)":
        display.innerText += "Math.atan(";
        parenthesesCounter++;
        break;
      case "e":
        const eNumber = Math.E;
        display.innerText += eNumber.toFixed(5);
        break;
      case "√(x)":
        display.innerText += "Math.sqrt(";
        parenthesesCounter++;
        break;
      case "x2":
        display.innerText += "^2";
        break;

      case "1/x":
        display.innerText += "1 / ";
        parenthesesCounter++;
        break;
      case "π":
        const piValue = Math.PI;
        display.innerText += piValue.toFixed(5);
        break;
      case "n!":
        display.innerText += "!";
        break;
      case "xy":
        display.innerText += "^";
        break;
      case "10x":
        display.innerText += "10^";
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
