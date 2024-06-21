// Tests api.js
const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  it('should return status code 200', (done) => {
    request(app).get('/').expect(200, done);
  });

  it('should return the correct message', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
