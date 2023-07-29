class FactorialCalculator {
  static findFactorial(num) {
    if (num === 0 || num === 1) return 1;
    else {
      return (num = num * FactorialCalculator.findFactorial(num - 1));
    }
  }
}

export default FactorialCalculator;
