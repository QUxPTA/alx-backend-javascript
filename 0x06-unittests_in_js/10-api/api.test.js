// api.test.js
const request = require('request');
const { expect } = require('chai');

describe('Integration Testing', () => {
  it('GET / should return status code 200', (done) => {
    request(
      {
        uri: 'http://localhost:7865/',
        method: 'GET',
      },
      (error, response, body) => {
        if (error) {
          done(error);
          return;
        }
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });

  it('GET / should return the correct message', (done) => {
    request(
      {
        uri: 'http://localhost:7865/',
        method: 'GET',
      },
      (error, response, body) => {
        if (error) {
          done(error);
          return;
        }
        expect(body).to.equal('Welcome to the payment system');
        done();
      }
    );
  });

  // Test suite for /cart/:id
  describe('GET /cart/:id', () => {
    it('should return status code 200 when :id is a number', (done) => {
      request(
        {
          uri: 'http://localhost:7865/cart/12',
          method: 'GET',
        },
        (error, response, body) => {
          if (error) {
            done(error);
            return;
          }
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal('Payment methods for cart 12');
          done();
        }
      );
    });

    it('should return status code 404 when :id is NOT a number', (done) => {
      request(
        {
          uri: 'http://localhost:7865/cart/hello',
          method: 'GET',
        },
        (error, response, body) => {
          if (error) {
            done(error);
            return;
          }
          expect(response.statusCode).to.equal(404);
          done();
        }
      );
    });
  });

  // Test suite for /available_payments
  describe('GET /available_payments', () => {
    it('should return status code 200 and the correct payment methods', (done) => {
      request(
        {
          uri: 'http://localhost:7865/available_payments',
          method: 'GET',
        },
        (error, response, body) => {
          if (error) {
            done(error);
            return;
          }
          expect(response.statusCode).to.equal(200);
          expect(JSON.parse(body)).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false,
            },
          });
          done();
        }
      );
    });
  });

  // Test suite for /login
  describe('POST /login', () => {
    it('should return status code 200 and welcome message when userName is provided', (done) => {
      request(
        {
          uri: 'http://localhost:7865/login',
          method: 'POST',
          json: {
            userName: 'Betty',
          },
        },
        (error, response, body) => {
          if (error) {
            done(error);
            return;
          }
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal('Welcome Betty');
          done();
        }
      );
    });

    it('should return status code 400 when userName is not provided', (done) => {
      request(
        {
          uri: 'http://localhost:7865/login',
          method: 'POST',
          json: {},
        },
        (error, response, body) => {
          if (error) {
            done(error);
            return;
          }
          expect(response.statusCode).to.equal(400);
          expect(body).to.equal('User name is required');
          done();
        }
      );
    });
  });
});
