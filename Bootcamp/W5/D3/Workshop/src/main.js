const { Author, Book } = require("../models");
const { Op } = require("sequelize");

const main = async () => {
	// updating via the class "Author"
	// await Author.update({
	// 	name: "Tom Holland"
	// },
	// {
	// 	where: {
	// 		name: "Rom Holland"
	// 	}
	// });

	// const a1 = await Author.create({
	// 	name: "Rom Holland",
	// 	field: "History",
	// });

	const a1 = await Author.findOne({
		where: { name: "Rom Holland" },
	});
	a1.update({
		name: "Tom Holland",
	});
	const books = await Book.findAll({
		attributes: ["title", ["author_id", "Author ID"]],
	});
	console.table(books.map((book) => book.toJSON()));

	// DELETE FROM Books WHERE author_id = 6 OR author_id = 7
	await Book.destroy({
		where: {
			author_id: {
				[Op.or]: [6, 7],
			},
		},
	});

	console.table(books.map((book) => book.toJSON()));
};

main();
