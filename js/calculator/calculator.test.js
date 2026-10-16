const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});
//multiply
test('multiply 5 * 9 to equal 45', () => {
  expect(calculator.multiply(5,9)).toBe(45);
});
test('multiply 50 * 50 to equal 2500', () => {
  expect(calculator.multiply(50,50)).toBe(2500);
});

//divide
test('divide 100 /10 to equal 10',() => {
  expect(calculator.divide(100,10)).toBe(10);
})
test('divide 500 / 5 to equal 100',() => {
  expect(calculator.divide(500,5)).toBe(100);
})
test('no se puede dividir entre 0',() => {
  expect(calculator.divide(500,0)).toBe('no se puede dividir por 0');
})