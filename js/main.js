"use strict";

import SelectTab from "./select-tab.js";
new SelectTab();

class Calculator {
  constructor() {
    this.display = document.querySelector(".output");
    this.buttons = [...document.querySelectorAll("[data-button]")];
    this.parenthesesCounter = 0;
    this.lastInputIsOperator = false;

    this.attachEventListeners();
  }

  attachEventListeners() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", (e) => this.handleButtonClick(e));
    });
  }

  handleButtonClick(e) {
    if (this.display.innerText === "Error") {
      this.display.innerText = "";
      this.parenthesesCounter = 0;
    }
    switch (e.target.innerText) {
      case "C":
        this.display.innerText = "";
        this.parenthesesCounter = 0;
        break;
      case "DEL":
        if (this.display.innerText) {
          this.display.innerText = this.display.innerText.slice(0, -1);
        }
        break;
      case "=":
        this.evaluateExpression();
        break;
      case "%":
        const percentageCalculator = new PercentageCalculator(this.display);
        percentageCalculator.calculatePercentage();
        break;
      case "n!":
        this.display.innerText += "!";
        break;
      case "×":
      case "÷":
      case "+":
      case "-":
        if (!this.lastInputIsOperator) {
          this.display.innerText += e.target.innerText;
          this.lastInputIsOperator = true;
        } else {
          this.display.innerText =
            this.display.innerText.slice(0, -1) + e.target.innerText;
        }
        break;
      case "()":
        const openingParenthesis = "(";
        const closingParenthesis = ")";

        if (this.parenthesesCounter % 2 === 0) {
          this.display.innerText += openingParenthesis;
          this.parenthesesCounter++;
        } else {
          this.display.innerText += closingParenthesis;
          this.parenthesesCounter--;
        }
        break;
      case ".":
        const currentNumber = this.display.innerText.split(/[+\-*/]/).pop();
        if (!currentNumber.includes(".")) {
          this.display.innerText += ".";
        }
        break;
      case "Exp(x)":
        this.display.innerText += "Math.exp(";
        this.parenthesesCounter++;
        break;
      case "Ln(x)":
        this.display.innerText += "Math.log(";
        this.parenthesesCounter++;
        break;
      case "Log(x)":
        this.display.innerText += "Math.log10(";
        this.parenthesesCounter++;
        break;
      case "|x|":
        this.display.innerText += "Math.abs(";
        this.parenthesesCounter++;
        break;

      case "Sin(x)":
        this.display.innerText += "Math.sin(";
        this.parenthesesCounter++;
        break;
      case "Cos(x)":
        this.display.innerText += "Math.cos(";
        this.parenthesesCounter++;
        break;
      case "Tan(x)":
        this.display.innerText += "Math.tan(";
        this.parenthesesCounter++;
        break;
      case "Cot(x)":
        this.display.innerText += "1 / Math.tan(";
        this.parenthesesCounter++;
        break;

      case "Asin(x)":
        this.display.innerText += "Math.asin(";
        this.parenthesesCounter++;
        break;
      case "Acos(x)":
        this.display.innerText += "Math.acos(";
        this.parenthesesCounter++;
        break;
      case "Atan(x)":
        this.display.innerText += "Math.atan(";
        this.parenthesesCounter++;
        break;
      case "e":
        const eNumber = Math.E;
        this.display.innerText += eNumber.toFixed(5);
        break;
      case "√(x)":
        this.display.innerText += "Math.sqrt(";
        this.parenthesesCounter++;
        break;
      case "x2":
        this.display.innerText += "^2";
        break;

      case "1/x":
        this.display.innerText += "1 / ";
        this.parenthesesCounter++;
        break;
      case "π":
        const piValue = Math.PI;
        this.display.innerText += piValue.toFixed(5);
        break;
      case "n!":
        this.display.innerText += "!";
        break;
      case "xy":
        this.display.innerText += "^";
        break;
      case "10x":
        this.display.innerText += "10^";
        break;

      default:
        this.display.innerText += e.target.innerText;
        this.lastInputIsOperator = false;
        break;
    }
  }

  evaluateExpression() {
    const expression = this.display.innerText
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/\^/g, "**")
      .replace(/(\d+)!/g, (match, num) =>
        FactorialCalculator.findFactorial(parseInt(num))
      );

    try {
      const resultFn = new Function(`return ${expression}`);
      const result = resultFn();

      if (isNaN(result) || !isFinite(result)) {
        this.display.innerText = "Error";
      } else {
        this.display.innerText = result;
      }
    } catch (error) {
      if (error instanceof SyntaxError) {
        this.display.innerText = "Error";
      } else {
        throw error;
      }
    }
  }
}

new Calculator();

class FactorialCalculator {
  static findFactorial(num) {
    if (num === 0 || num === 1) return 1;
    else {
      return (num = num * FactorialCalculator.findFactorial(num - 1));
    }
  }
}

new FactorialCalculator();

class PercentageCalculator {
  constructor(display) {
    this.display = display;
  }

  calculatePercentage() {
    const expression = this.display.innerText.split(/[-+×÷]/);
    const lastNumber = expression[expression.length - 1];
    const percentage = parseFloat(lastNumber);
    const previousNumber = parseFloat(expression[0]);
    const operand = this.display.innerText.match(/[+-]/);
    let result;

    if (expression.length < 2) {
      result = previousNumber;
    } else if (operand && operand[0] === "+") {
      result =
        previousNumber +
        this.calculatePercentageValue(previousNumber, percentage);
    } else if (operand && operand[0] === "-") {
      result =
        previousNumber -
        this.calculatePercentageValue(previousNumber, percentage);
    } else {
      result = this.calculatePercentageValue(previousNumber, percentage);
    }

    this.display.innerText = result;
  }

  calculatePercentageValue(base, percentage) {
    return (base * percentage) / 100;
  }
}

new PercentageCalculator();
