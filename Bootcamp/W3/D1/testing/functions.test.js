// use .toEqual for objects and arrays, use .toBe for primitives

const { sum, characters, odd } = require('./functions.js');

describe('testing some functions from functinos package', () => {
	test('function performs addition', () => {
		// arranging how everything goes
		const expectedValue = 3;

		// act
		const actualValue = sum(1, 2);
		expect(actualValue).toBe(expectedValue);
	});


	test('characters has the correct structure', () => {
		const expectedCharacter = {
			name: 'Miguel',
			age: 20,
			origin: 'Spain'
		}
		const actualCharacter = characters[0];

		expect(Object.keys(actualCharacter)).toEqual(Object.keys(expectedCharacter))
	});
});

describe('testing other functions from functions package', () => {
	test('odd number function works correctly for even numbers', () => {
		expect(odd(4)).toBeFalsy();
	});

	test('odd number function works correctly for odd numbers', () => {
		expect(odd(3)).toBeTruthy();
	})
})