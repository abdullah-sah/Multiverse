const { DataTypes, Model } = require("sequelize");
const db = require("../db/db");

class Quote extends Model {}

Quote.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		quote: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize: db,
	}
);

module.exports = Quote;
