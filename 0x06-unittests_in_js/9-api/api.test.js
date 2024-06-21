// api.test.js
const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('should return status code 200', (done) => {
    request('http://localhost:7865', (error, response) => {
      if (error) throw error;
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  it('should return the correct result', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      if (error) throw error;
      expect(body).toBe('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return status code 200 when :id is a number', (done) => {
    request('http://localhost:7865/cart/123', (error, response) => {
      if (error) throw error;
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  it('should return status code 404 when :id is not a number', (done) => {
    request('http://localhost:7865/cart/hello', (error, response) => {
      if (error) throw error;
      expect(response.statusCode).toBe(404);
      done();
    });
  });

  it('should return the correct result when :id is a number', (done) => {
    request('http://localhost:7865/cart/456', (error, response, body) => {
      if (error) throw error;
      expect(body).toBe('Payment methods for cart 456');
      done();
    });
  });
});
