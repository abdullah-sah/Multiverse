button = document.querySelector('button');

const addEventListeners = () => {
	const skillLevelNumber = document.getElementById('slider');
	const skillLevelLabel = document.getElementById('slider-label');
	const inputText = document.getElementById('title');

	const checkCardFilled = () => {
		if (inputText.value !== '' && skillLevelLabel.textContent !== 'Skill Level') {
			return true;
		} else {
			return false;
		}
	}

	skillLevelNumber.addEventListener('input', () => {
		skillLevelLabel.textContent = `Skill Level (${skillLevelNumber.value})`;
		button.disabled = !checkCardFilled();
	})

	inputText.addEventListener('input', () => {
		button.disabled = !checkCardFilled();
	})

}

const skillRange = (number) => {
	const actualNumber = Number(number);
	if (actualNumber < 25) {
		return 'Low';
	} else if (actualNumber >= 25 && actualNumber < 75) {
		return 'Medium';
	} else {
		return 'High';
	}
}

const createCard = () => {
	const title = document.querySelector('#title');
	const checkBox = document.querySelector('#show-skills');
	const skillLevelNumber = document.querySelector('#slider');
	const skillLevelLabel = document.querySelector('#slider-label');

	document.querySelector('label[for="title"]').textContent = title.value;
	title.remove();
	let message;
	if (checkBox.checked) {
		message = `Skill Level: ${skillLevelNumber.value}`;
	} else {
		message = `Skill Level: ${skillRange(skillLevelNumber.value)}`;
	}
	skillLevelLabel.textContent = message;
	skillLevelNumber.remove();
	document.querySelector('.boolean').remove();
}


addEventListeners();

button.addEventListener('click', () => {
	if (button.textContent === 'Create Card') {
		createCard();
		button.textContent = 'Reset?';
	} else {
		location.reload();
	}
})