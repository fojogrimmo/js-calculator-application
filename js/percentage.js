class PercentageCalculator {
  constructor(display) {
    this.display = display;
  }

  calculatePercentage() {
    const expressionParts = this.display.innerText.split(/[-+×÷]/);
    const lastNumber = expressionParts[expressionParts.length - 1];
    const percentage = parseFloat(lastNumber);
    const previousNumber = parseFloat(expressionParts[0]);
    const operand = this.display.innerText.match(/[+-]/);
    let result;

    if (expressionParts.length < 2) {
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

export default PercentageCalculator;
