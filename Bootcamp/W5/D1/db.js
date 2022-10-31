const { Sequelize } = require("sequelize");

const path = require("path");

const db = new Sequelize({
	dialect: "sqlite",
	storage: path.join(__dirname, "my_books.sqlite"),
});

module.exports = db;
