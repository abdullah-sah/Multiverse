class TukTuk {
	constructor(name, potentialPassengers, maxSpeed) {

		// The idea behind the "_" is encapsulation 			similar to Java's private keyword for properties but not as secure.
		// i.e. making sure that instances of class can't access properties immediately - they need a "getter" function
		// Getter functions use the "get" keyword – can use getters and setters in objects too
		// Setter functions use the "set" keyword
		// The advantage of the "get" and "set" keywords is that to get the name, we can write "${classInstance}.name"
		// 		The above line is a function call to the "get name()" method.
		// Note that all of this is convention, 
		this._name = name;
		this._potentialPassengers = potentialPassengers;
		this._maxSpeed = maxSpeed;
		this._actualPassengers = 0;
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		this._name = newName;
	}

	get potentialPassengers() {
		return this._potentialPassengers;
	}

	set potentialPassengers(passengers) {
		this._potentialPassengers = passengers;
	}

	get maxSpeed() {
		return this._maxSpeed;
	}

	set maxSpeed(speed) {
		this._maxSpeed = speed;
	}

	get actualPassengers() {
		return this._actualPassengers;
	}

	workingCapacity() {
		return this._potentialPassengers - this._actualPassengers;
	}

	workingCapacityMessage() {
		return `${this._name} has ${this.workingCapacity()} spaces left.`;
	}

	takePassengers(passengers) {
		if (this.workingCapacity() >= passengers) {
			this._actualPassengers += passengers;
			return 0;
		} else {
			const tempWorkingCapacity = this.workingCapacity();
			this._actualPassengers = this._potentialPassengers
			return passengers - tempWorkingCapacity;
		}
	}

	dropPassengers(passengers) {
		if (this._actualPassengers >= passengers) {
			this._actualPassengers -= passengers;
			return this._actualPassengers;
		}
	}
}

module.exports = { TukTuk };