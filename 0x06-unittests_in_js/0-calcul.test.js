// Tests 0-calcul.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return the sum of rounded numbers', function () {
    const result = calculateNumber(1.1, 2.2);
    assert.strictEqual(result, 3); // 1 + 2 = 3
  });

  it('should handle negative numbers', function () {
    const result = calculateNumber(-1.5, 2.7);
    assert.strictEqual(result, 2); // -2 + 3 = 1
  });

  it('should handle zero values', function () {
    const result = calculateNumber(0, 0);
    assert.strictEqual(result, 0); // 0 + 0 = 0
  });

  it('should handle large numbers', function () {
    const result = calculateNumber(999999999.9, 0.1);
    assert.strictEqual(result, 1000000000); // 1000000000 + 0 = 1000000000
  });

  it('should handle decimal values', function () {
    const result = calculateNumber(1.5, 2.4);
    assert.strictEqual(result, 4); // 2 + 2 = 4
  });
});
