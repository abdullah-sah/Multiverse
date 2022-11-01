const db = require("../db/db");

const main = async () => {
	await db.query(`
		DROP TABLE IF EXISTS books;
	`);

	await db.query(`
		DROP TABLE IF EXISTS authors;
	`);

	await db.query(`
		CREATE TABLE IF NOT EXISTS authors (
			id INTEGER PRIMARY KEY,
			name TEXT NOT NULL,
			field TEXT
		);
	`);

	await db.query(`
		CREATE TABLE IF NOT EXISTS books (
			id INTEGER PRIMARY KEY,
			title TEXT NOT NULL,
			author_id INTEGER DEFAULT NULL REFERENCES authors (id) --ON DELETE SET DEFAULT
		);
	`);

	await db.query(`
		INSERT INTO authors (name, field)
		VALUES
		("Peter Harrison", "History"),
		("Hans-Georg Gadamer", "Philosophy"),
		("Michael Polanyi", "Philosophy"),
		("Rita Felsky", "Literary Criticism"),
		("Leo Tolstoi", "Literature"),
		("Mary Midgley", "Philosophy");
	`);

	await db.query(`
		INSERT INTO books (title, author_id)
		VALUES
		("Truth and Method", 2),
		("The Relevance of the Beautiful", 2),
		("Personal Knowledge", 3),
		("The Tacit Dimension", 3),
		("The Fall of Man and the Foundations of Science", 1),
		("The Limits of Critique", 4),
		("Resurrection", 5);
	`);

	// cannot insert with author_id of 10 because that is out of the foreign key's range (there's less than 10 authors in authors table)
	// await db.query(`
	// 	INSERT INTO books (title, author_id)
	// 	VALUES ("The Pilgrim's Tale", 10);
	// `);

	// await db.query(`
	// 	DELETE FROM authors
	// 	WHERE id = 1;
	// `);

	await db.query(`
		INSERT INTO books (title)
		VALUES ("Focusing");
	`);

	// will return table with columns specified on line 39
	// const [result, meta] = await db.query(`
	// 	SELECT authors.name, books.title
	// 	FROM authors INNER JOIN books
	// 	ON authors.id = books.author_id;
	// `);

	// const [result, meta] = await db.query(`
	// 	SELECT authors.name, books.title
	// 	FROM authors LEFT JOIN books
	// 	ON  authors.id = books.author_id;
	// `);

	// const [result, meta] = await db.query(`
	// 	SELECT authors.name, books.titleS
	// 	FROM authors RIGHT JOIN books
	// 	ON authors.id = books.author_id;
	// `);

	const [result, meta] = await db.query(`
		SELECT authors.name, books.title
		FROM authors FULL JOIN books
		ON authors.id = books.author_id;
	`);

	console.table(result);
};

main();
