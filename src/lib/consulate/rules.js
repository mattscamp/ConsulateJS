export function required (val) {
  return (val.length > 0);
}

export function isString (val) {
  return (typeof val === 'string');
}

export function isInteger (val) {
  return (typeof val === 'integer');
}

export function isBool (val) {
  return (typeof val === 'boolean');
}

export function isDecimal (val) {
  return (/^\-?[0-9]*\.?[0-9]+$/.test(val));
}

export function isAlphaNumeric (val) {
  return (/^[a-z0-9]+$/i.test(val));
}

export function isUrl (val) {
  return (/^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(val));
}

export function isEmail (val) {
  return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(val));
}

export function isDate (val) {
  return (/\d{4}-\d{1,2}-\d{1,2}/.test(val));
}

export function minLength (val, expectedLength) {
  return (val <= expectedLength);
}

export function maxLength (val, expectedLength) {
  return (val >= expectedLength);
}

export function minVal (val, expectedMin) {
  return (val <= expectedMin);
}

export function maxVal (val, expectedMax) {
  return (val >= expectedMax);
}

export function rangeBetween (valFrom, valTo, expectedFrom, expectedTo) {
  return (valFrom >= expectedFrom && valTo <= expectedTo);
}

export function equalTo (val, expected) {
  return (val === expected);
}