// 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  beforeEach(function () {
    // Create a spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore console.log after each test
    consoleLogSpy.restore();
  });

  it('should log the correct total to the console for 100 and 20', function () {
    // Call the function that we are testing
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct message
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log the correct total to the console for 10 and 10', function () {
    // Call the function that we are testing
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log was called with the correct message
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
  });
});
