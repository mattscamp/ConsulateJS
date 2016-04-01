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
} from './rules';

let settings = {};
let validators = {};
let errors = [];

export function validate (formId, settings, callback) {
	settings = {
		messages: {
            "required": settings.messages.required || 'The %s field is required.',
            "isEmail": settings.messages.isEmail || 'The %s field must contain a valid email address.',
            "minLength": settings.messages.minLength ||'The %s field must be at least %s characters in length.',
            "maxLength": settings.messages.maxLength ||'The %s field must not exceed %s characters in length.',
            "minVal": settings.messages.minVal ||'The %s field must contain a number greater than %s.',
            "maxVal": settings.messages.maxVal ||'The %s field must contain a number less than %s.',
            "isAlphaNumeric": settings.messages.isAlphaNumeric ||'The %s field must only contain alpha-numeric characters.',
        },
        debug: settings.debug || false,
	};

	let el = document.getElementById(formId);

	if(!el) {
		return settings.debug ? "No form was found with that Id." : false;
	}

	findValidations(el);

	if(!validators) {
		return settings.debug ? "No data-consulate attributes found." : false;
	}

	parseValidations();

	return errors;
}

function isValid(rule, val) {
	let expectedVal = attr.split(':')[1];

	if (rule === "required" && !required(val)) {
		errors.push(settings.messages[rule]);
	}
	else if (rule === "isEmail" && !isEmail(val)) {
		errors.push(settings.messages[rule]);
	}
	else if (rule === "minLength" && !minLength(val, expectedVal)) {
		errors.push(settings.messages[rule]);
	}
	else if (rule === "maxLength" && !maxLength(val, expectedVal)) {
		errors.push(settings.messages[rule]);
	}
	else if (rule === "minVal" && !minVal(val, expectedVal)) {
		errors.push(settings.messages[rule]);
	}
	else if (rule === "maxVal" && !maxVal(val, expectedVal)) {
		errors.push(settings.messages[rule]);
	}
	else if (rule === "isAlphaNumeric" && !isAlphaNumeric(val)) {
		errors.push(settings.messages[rule]);
	}
	else {
		return settings.debug ? "Invalid rule supplied: ${rule}" : false;
	}
}

function parseValidations() {
	for (let node in validators) {
		let rules = validators[node].rule;
		let val = validators[node].val;

		if (typeof rules === 'array') {
			for (rule of rules) {
				isValid(rule, val);
			}
		}
		else {
			isValid(rule, val);
		}
	}

	return true;
}

function findValidations(el) {
  	let node = el;
  	let attrs = node.attributes;
   	let childNodes = node.childNodes;

  	if (attrs) {
	    for (let attr of attrs) {
	    	if(attr === 'data-consulate') {
	    		validators[node.nodeName].rule = attr.split('|');
	    		validators[node.nodeName].val = node.value;
	    	}
	    }
  	}
  	
  	if (childNodes) {
  		for (let child of childNodes) {
  			findValidations(child);
  		}
  	}
  	
  	return true;
}
