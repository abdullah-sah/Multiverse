const { Author, Book, Borrower, Quote } = require("../models");

const main = async () => {
	const borrower1 = await Borrower.findByPk(1);
	// const book1 = await borrower1.getBook();
	// console.log(book1.toJSON());

	const borrowers = await Borrower.findAll();
	console.log(borrowers[2].toJSON());

	const book1 = await Book.findByPk(2);
	await book1.setBorrower(borrowers[3]);
	// console.log(borrowers[3]);

	/*********** One-to-Many ***********/
	const author1 = await Author.findByPk(5);
	console.table((await author1.getBooks()).map((b) => b.toJSON()));

	console.log(`Total books: ${await author1.countBooks()}`);

	/*********** Many-to-Many ***********/
	// Methods that can be used
	// addQuote
	// getQuotes
	// removeQuote
};

main();
