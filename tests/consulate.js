let expect = require('chai').expect;
let consulate = require('../src/consulate');

describe('consulate.isString', () => {
  it('should return bool true for string', () => {
    expect(consulate.isString('test')).to.eql(true);
  });
  it('should return bool false for not string', () => {
    expect(consulate.isString(123)).to.eql(false);
  });
});

describe('consulate.isEmail', () => {
  it('should return bool true for email', () => {
    expect(consulate.isEmail('test@test.com')).to.eql(true);
  });

  it('should return bool false for invalid email', () => {
    expect(consulate.isEmail('testtest.com')).to.eql(false);
  });
});