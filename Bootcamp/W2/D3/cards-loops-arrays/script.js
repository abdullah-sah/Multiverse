const cardSection = document.querySelector('.cards');
const numberOfCards = document.querySelector('#card-number');

const randomInfo = [
	'Truth and Method, by Hans-Georg Gadamer',
	'The Territories of Science and Religion, by Peter Harrison',
	'The Tacit Dimension, by Michael Polanyi',
	'The Limits of Critique, by Rita Felski',
	'Aspects of Truth, by Catherine Pickstock',
	'Saving the Appearances, by Owen Barfield',
	'The Master and His Emissary, by Iain McGilchrist',
	'Philosopher of the Heart, by Clare Carlisle',
	'Dominion, by Tom Holland',
	'Silence, by Shusako Endo'
];

numberOfCards.addEventListener('input', () => {
	createCards(numberOfCards);
})

const createCard = (cardNumber) => {
	const card = document.createElement('div');
	card.classList.add('card');

	const cardText = document.createElement('p');
	cardText.append(cardNumber.toString());
	card.append(cardText);

	card.addEventListener('click', () => {
		// let randomVariable = (boolean_expression) ? give_me_this_if_true : give_me_this_if_false;
		let text = (card.firstChild.innerText !== cardNumber.toString()) ? cardNumber : randomInfo[Math.floor(Math.random()*10)];
		cardText.replaceChildren(text);
		card.replaceChildren(cardText);
	});

	cardSection.append(card);
}

const createCards = (numberOfCards) => {
	cardSection.replaceChildren();

	for (let i = numberOfCards.min; i <= numberOfCards.value; i++) {
		createCard(i);
	}
}