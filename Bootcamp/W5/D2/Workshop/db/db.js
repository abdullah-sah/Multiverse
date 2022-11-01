const { Sequelize } = require("sequelize");
const path = require("path");

const db = new Sequelize({
	dialect: "sqlite",
	// __dirname is a node variable that points to current directory
	storage: path.join(__dirname, "books.sqlite"),
});

module.exports = db;
