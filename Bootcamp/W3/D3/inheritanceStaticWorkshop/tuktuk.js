class TukTuk {
	// the '#' notation means that these variables are private. (i.e. variables can't be accessed from outside the class.)
	#name;
	#size;
	#passengerCapacity;

	constructor(name, size, passengerCapacity) {
		this.#name = name;
		this.#size = size;
		this.#passengerCapacity = passengerCapacity;
	}

	get name() {
		return this.#name;
	}

	get size() {
		return this.#size;
	}

	get passengerCapacity() {
		return this.#passengerCapacity;
	}

	set passengerCapacity(passengers) {
		this.#passengerCapacity = passengers;
	}

	quickFacts() {
		return `${this.name} is a tuk tuk of ${this.size} size and it can carry ${this.passengerCapacity} passengers`;
	}


	// the static keyword means this property/method should be called on the class itself, rather than an instance of the class.
	// One scenario where this might be useful would be keeping track of how many instances of the class TukTuk have been created
	// 		by using a static property which could be called count, for example.
	static findSubstituteDriver(drivers) {
		return drivers[Math.floor(Math.random() * drivers.length)];
	}

}

const bullet = new TukTuk('bullet', 'small', 4);

// console.log(bullet);
// const drivers = ['John', 'Esgrid', 'Sam', 'Rosa'];
// console.log(TukTuk.findSubstituteDriver(drivers));

module.exports = TukTuk;