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
});
