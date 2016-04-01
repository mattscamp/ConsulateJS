//! inliner.js
//! version : 0.0,1
//! authors : Matthew Camp
//! license : MIT
import {
  required,
  isString,
  isInteger,
  isBool,
  isDecimal,
  isAlphaNumeric,
  isUrl,
  isDate,
  isEmail,
  minLength,
  maxLength,
  minValue,
  maxValue,
  rangeBetween,
  equalTo
} from './lib/consulate/rules';

import {
  validate
} from './lib/consulate/validate';

class consulate { };

consulate.validate       = validate;
consulate.isString       = isString;
consulate.isInteger      = isInteger;
consulate.isBool         = isBool;
consulate.isDecimal      = isDecimal;
consulate.isAlphaNumeric = isAlphaNumeric;
consulate.isUrl          = isUrl;
consulate.isEmail        = isEmail;
consulate.minLength      = minLength;
consulate.maxLength      = maxLength;
consulate.minValue       = minValue;
consulate.maxValue       = maxValue;
consulate.rangeBetween   = rangeBetween;
consulate.equalTo        = equalTo;

module.exports = consulate;