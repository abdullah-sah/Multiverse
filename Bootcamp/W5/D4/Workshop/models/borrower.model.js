const { DataTypes, Model } = require("sequelize");
const db = require("../db/db");

class Borrower extends Model {}

Borrower.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize: db,
	}
);

module.exports = Borrower;
