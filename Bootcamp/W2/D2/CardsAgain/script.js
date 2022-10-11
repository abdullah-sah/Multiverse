const cardInfo = {
	cardName: 'Rocky Baggins',
	cardSkillLevel: 24,
	cardDisplaySkillLevel: true,
	cardImage: '',
	displayRange() {
		if (this.cardSkillLevel < 25) {
			return 'Low';
		} else if (this.cardSkillLevel < 75) {
			return 'Medium';
		} else {
			return 'High';
		}
	},
	skillMessage() {
		return (this.cardDisplayLevel) ? `Skill Level: ${this.cardSkillLevel}` : `Skill Level: ${this.displayRange()}`;
	},
	styleCard(main, article, cardSection, nameSubSection, skillLevelSubSection, button) {
		main.classList.toggle('main')
		article.classList.toggle('card');
		cardSection.classList.toggle('card-info');
		nameSubSection.classList.toggle('name');
		skillLevelSubSection.classList.toggle('skill');
		button.classList.toggle('button');
	}
};

const createHTML = () => {
	const main = document.querySelector('main');
	const article = document.createElement('article');
	const cardSection = document.createElement('section');
	const nameSubSection = document.createElement('section');
	const name = document.createElement('h2');
	const skillLevelSubSection = document.createElement('section');
	const skill = document.createElement('h3');
	const button = document.createElement('button');
	name.append(cardInfo.cardName.toUpperCase());
	nameSubSection.append(name);
	skill.append(cardInfo.skillMessage());
	skillLevelSubSection.append(skill);
	cardSection.append(nameSubSection, skillLevelSubSection);
	button.textContent = 'Style Card';
	article.append(cardSection, button);
	main.append(article);
	button.addEventListener('click', () => {
		cardInfo.styleCard(main, article, cardSection, nameSubSection, skillLevelSubSection, button);

		button.textContent = (button.textContent === 'Style Card') ? 'Uglify' : 'Style Card';
	})
}

createHTML();