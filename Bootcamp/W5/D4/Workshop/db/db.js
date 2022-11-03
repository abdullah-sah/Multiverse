const { Sequelize } = require("sequelize");
const path = require("path");

const db = new Sequelize({
	dialect: "sqlite",
	// tells it where to create db file which will be name 'booksUltimatum.sqlite'
	storage: path.join(__dirname, "./booksUltimatum.sqlite"),
	// stops sqlite tasks output from showing up in terminal
	logging: false,
});

module.exports = db;
