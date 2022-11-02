const { Author, Book } = require("../models/index.js");
const db = require("./db");

const seed = async () => {
	// This line drops books if it exists and creates it if it doesn't
	// await Book.sync({
	// 	force: true,
	// });

	// await Author.sync({
	// 	force: true,
	// });

	// because we added line 30 in db.js, sequelize links the models to the value given to it (db).
	// so we can run the below line, and all tables/models within will be synced
	await db.sync({ force: true });

	// const a1 = Author.build({
	// 	name: "Rom Holland",
	// 	field: "Story",
	// });

	// await a1.save();

	const a1 = await Author.bulkCreate([
		{
			name: "Karl Popper",
			field: "Philosophy of Science",
		},
		{
			name: "Imre Lakatos",
			field: "Philosophy of Science",
		},
		{
			name: "Rom Holland",
			field: "History",
		},
		{
			name: "Stephen Gaukroger",
			field: "History and Philosophy",
		},
		{
			name: "Clare Carlisle",
			field: "Theology",
		},
		{
			name: "Maria Rosa Antognazza",
			field: "Philosophy",
		},
		{
			name: "Judith Wolfe",
			field: "Theology",
		},
		{
			name: "Thomas Kuhn",
			field: "Philosophy of Science",
		},
	]);

	await Author.bulkCreate(
		[
			{
				name: "steve",
				field: "Philosopher of Science",
			},
		],
		{ validate: true }
	);

	await Book.bulkCreate([
		{
			title: "Leibniz: An Intellectual Biography",
			author_id: 6,
		},
		{
			title: "Heidegger and Theology",
			author_id: 7,
		},
		{
			title: "Spinoza's Religion",
			author_id: 5,
		},
		{
			title: "The Collapse of Mechanism and the Rise of Sensibility",
			author_id: 4,
		},
		{
			title: "The Emergence of a Scientific Culture",
			author_id: 4,
		},
		{
			title: "The Natural and the Human",
			author_id: 4,
		},
		{
			title: "The Structure of Scientific Revolutions",
			author_id: 8,
		},
	]);
};

seed();
