const main = document.querySelector("main");
const ride = document.querySelector("#ride");
const crash = document.querySelector("#crash");
const floorTom = document.querySelector("#floor-tom");
const midTom = document.querySelector("#mid-tom");
const highTom = document.querySelector("#high-tom");
const hiHat = document.querySelector("#hi-hat");
const snare = document.querySelector("#snare");
const bassDrum = document.querySelector("#bass-drum");
let arr = [ride, crash, floorTom, midTom, highTom, hiHat, snare, bassDrum];

for (let instrument of arr) {
	instrument.addEventListener("click", () => {
		let ins = new Audio(`./Assets/${instrument.innerHTML}.wav`);
		ins.play();
	})
}