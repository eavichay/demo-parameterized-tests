const assert = require('assert');
const fs = require('fs');
const csvLoader = require('csv-load-sync');

// This is the unit being tested
const myMul = (a, b) => a * b;

// Test file
describe('myMul', () => {
	const testParameters = csvLoader('./mymul.csv');
	testParameters.forEach(({a, b, expected}) => {
		it(`Should multiply ${a} by ${b} and expect ${expected}`, () => {
			const val1 = parseFloat(a);
			const val2 = parseFloat(b);
			const expectedValue = parseFloat(expected);
			assert.strictEqual(myMul(val1, val2), expectedValue);
		});
	});
});
