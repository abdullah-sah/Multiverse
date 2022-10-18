const sum = (a, b) => {
	return a + b;
}

const characters = [
	{
		name:'John',
		age: 50,
		origin: 'Australia'
	},
	{
		name: 'Roosa',
		age: 30,
		origin: 'Finland'
	}
];

const odd = number => number % 2 !== 0;

module.exports = { sum, characters, odd };