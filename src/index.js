const Calculator = require('./calculator');

/**
 * Main application entry point
 */
function main() {
  const calc = new Calculator();

  console.log('GitHub Actions Learning Lab - Calculator Demo');
  console.log('==============================================');
  console.log();
  
  // Demonstrate calculator operations
  console.log('Addition: 5 + 3 =', calc.add(5, 3));
  console.log('Subtraction: 10 - 4 =', calc.subtract(10, 4));
  console.log('Multiplication: 6 * 7 =', calc.multiply(6, 7));
  console.log('Division: 15 / 3 =', calc.divide(15, 3));
  console.log('Power: 2 ^ 8 =', calc.power(2, 8));
  console.log();
  console.log('Calculator operations completed successfully!');
}

// Run if executed directly
if (require.main === module) {
  main();
}

module.exports = { Calculator, main };
