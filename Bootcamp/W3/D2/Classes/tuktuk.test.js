const { TukTuk } = require('./tuktuk.js');

describe('teesting our tuk-tuk class instance', () => {
	beforeEach(() => {
		// bullet is a new instance of TukTuk
		bullet = new TukTuk('The bullet', 10, 40);
	})

	test('can get name', () => {
		expect(bullet.name).toBe('The bullet');
	});

	test('can set passenger name', () => {
		bullet.name = 'Flying Bullet';
		expect(bullet.name).toBe('Flying Bullet');
	});
	
	test('can get passenger capacity', () => {
		expect(bullet.potentialPassengers).toBe(10);
	});

	test('can set passenger capacity', () => {
		bullet.potentialPassengers = 12;
		expect(bullet.potentialPassengers).toBe(12);
	});

	// test maxSpeed getter and setter

	test('working capacity returns correct value', () => {
		expect(bullet.workingCapacity()).toBe(10);
	});

	test('can take some passengers depending on its working capacity', () => {
		expect(bullet.takePassengers(8)).toBe(0);
	});

	test('can drop some passengers based on actual capacity', () => {
		bullet.takePassengers(10);
		expect(bullet.dropPassengers(5)).toBe(5);
	})

})