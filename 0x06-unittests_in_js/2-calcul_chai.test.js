// 2-calcul_chai.test.js
const { expect } = require('chai'); // Destructuring expect from chai
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM operation', function () {
    it('should return the sum of rounded numbers', function () {
      const result = calculateNumber('SUM', 1.1, 2.2);
      expect(result).to.equal(3); // 1 + 2 = 3
    });
  });

  describe('SUBTRACT operation', function () {
    it('should return the subtraction of rounded numbers', function () {
      const result = calculateNumber('SUBTRACT', 5.2, 3.3);
      expect(result).to.equal(2); // 5 - 3 = 2
    });
  });

  describe('DIVIDE operation', function () {
    it('should return the division of rounded numbers', function () {
      const result = calculateNumber('DIVIDE', 10, 2);
      expect(result).to.equal(5); // 10 / 2 = 5
    });

    it('should handle division by zero', function () {
      const result = calculateNumber('DIVIDE', 8, 0);
      expect(result).to.equal('Error'); // Division by zero should return 'Error'
    });
  });

  describe('Unsupported operation', function () {
    it('should throw an error for unsupported operation type', function () {
      expect(() => calculateNumber('MULTIPLY', 2, 3)).to.throw(
        'Unsupported operation type'
      );
    });
  });
});
