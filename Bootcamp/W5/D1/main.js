const db = require("./db");

async function main() {
	await db.query(`
		DROP TABLE IF EXISTS books;
	`);

	await db.query(`
		CREATE TABLE IF NOT EXISTS books (
			id INTEGER PRIMARY KEY,
			author TEXT,
			title TEXT NOT NULL,
			subject TEXT,
			read INTEGER DEFAULT 0,
			times_read INTEGER DEFAULT 0
		);
	`);

	await db.query(`
		INSERT INTO books (author, title, subject) VALUES
		("Peter Harrison", "The Territories of Science and Religion", "History");
	`);

	await db.query(`
		INSERT INTO books (author, title, subject) VALUES
		("Martin Heidegger", "Being and Time", "Philosophy");
	`);

	await db.query(`
		INSERT INTO books (author, title, subject) VALUES 
		("Rita Felski", "The Limits of Critique", "Literary Criticism");
	`);

	await db.query(`
		INSERT INTO books (author, title, subject) VALUES
		("Michael Polanyi", "The Tacit Dimension", "Philosophy");
	`);

	await db.query(`
		INSERT INTO books (author, title, subject) VALUES
		("Michael Polanyi", "Personal Knowledge", "Philosophy");
	`);

	await db.query(`
		INSERT INTO books (author, title, subject) VALUES
		("Hans-Georg Gadamer", "The Relevance of the Beautiful", "Philosophy");
	`);

	await db.query(`
		INSERT INTO books (author, title, subject) VALUES
		("DC Schindler", "Plato's Critique of Impure Reason", "Philosophy");
	`);

	await db.query(`
		UPDATE books
		SET times_read = 2, read = 1
		WHERE author = "Michael Polanyi" OR author = "Hans-Georg Gadamer";
	`);

	await db.query(`
		UPDATE books
		SET author = "D.C. Schindler", read = 1, times_read = 1
		WHERE author = "DC Schindler";
	`);

	await db.query(`
		UPDATE books
		SET times_read = 3
		WHERE author = "Michael Polanyi" OR author = "Hans-Georg Gadamer";
	`);

	// await db.query(`
	// 	DELETE FROM books
	// 	WHERE title = "Personal Knowledge";
	// `);

	// await db.query(`
	// 	DELETE FROM books
	// 	WHERE times_read < 2 OR read = 0;
	// `);

	// const [result, meta] = await db.query(`
	// 	SELECT * FROM books;
	// `);

	// const [result, meta] = await db.query(`
	// 	SELECT DISTINCT author FROM books;
	// `);

	const [result, meta] = await db.query(`
		SELECT author AS 'Author', COUNT(*) AS 'Number of Books'
		FROM books
		GROUP BY 1;
	`);

	console.table(result);
}

main();
