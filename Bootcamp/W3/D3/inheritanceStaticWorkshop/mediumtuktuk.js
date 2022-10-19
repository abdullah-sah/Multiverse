const TukTuk = require('./tuktuk');

class MediumTukTuk extends TukTuk {
	constructor(name, passengerCapacity) {
		super(name, 'medium', passengerCapacity);
	}
}

module.exports = MediumTukTuk;