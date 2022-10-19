const TukTuk = require('./tuktuk');
const SmallTukTuk = require('./smalltuktuk');
const MediumTukTuk = require('./mediumtuktuk');

class Lorry {
	constructor() {
		this.cargo = [];
	}

	addCargo(vehicle) {
		this.cargo.push(vehicle);
	}
}


const bullet = new TukTuk('bullet', 'small', 4);
const smallBullet = new SmallTukTuk('small bullet', 3, 'Bullet Power');
const mediumBullet = new MediumTukTuk('medium bullet', 3)
const myLorry = new Lorry();

myLorry.addCargo(bullet);
myLorry.addCargo(smallBullet);
myLorry.addCargo(mediumBullet);

// console.log(myLorry);

console.log(myLorry.cargo[1].quickFacts());
