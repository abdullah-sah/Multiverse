const TukTuk = require('./tuktuk');



// Using extends allows you to use existing TukTuk properties and methods.
class SmallTukTuk extends TukTuk {
	constructor(name, passengerCapacity, specialMotto) {
		// super activates the constructor of the parent
		super(name, 'small', passengerCapacity);
		this._specialMotto = specialMotto;
	}

	get specialMotto() {
		return this._specialMotto;
	}

	set specialMotto(specialMotto) {
		this._specialMotto = specialMotto;
	}
}

const smallBullet = new SmallTukTuk('small bullet', 3, 'Bullet Power');

// console.log(smallBullet);
// console.log(smallBullet.name);
// const drivers = ['John', 'Esgrid', 'Sam', 'Rosa'];
// console.log(TukTuk.findSubstituteDriver(drivers));

module.exports = SmallTukTuk;